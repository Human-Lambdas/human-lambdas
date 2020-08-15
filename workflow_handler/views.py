from django.utils import timezone
from django.conf import settings
from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    ListAPIView,
)
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from workflow_handler.csv_utils import process_csv
from django.db import transaction
from django.db.models import Q, F
from django.shortcuts import get_object_or_404, get_list_or_404
from user_handler.permissions import IsOrgAdmin

from .serializers import WorkflowSerializer, TaskSerializer
from .models import Workflow, Task, Source, WebHook
from .utils import sync_workflow_task, decode_csv


class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        return Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )

    def perform_create(self, serializer):
        queryset = self.get_queryset()
        if self.request.data["name"] in queryset.values_list("name", flat=True):
            raise serializers.ValidationError("Workflow with same name already exists")
        serializer.save()


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        queryset = Workflow.objects.filter(
            Q(disabled=False)
            & Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        task_status = self.request.query_params.get("task_status")
        if task_status:
            queryset = queryset.filter(task__status=task_status).distinct()
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RUDWorkflowView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_serializer(self, *args, **kwargs):
        """
        Return the serializer instance that should be used for validating and
        deserializing input, and for serializing output.
        """
        serializer_class = self.get_serializer_class()
        kwargs["context"] = self.get_serializer_context(*args, **kwargs)
        return serializer_class(*args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        """
        Extra context provided to the serializer class.
        """
        context = {
            "request": self.request,
            "format": self.format_kwarg,
            "view": self,
        }
        try:
            if not kwargs["data"]["webhook"]:
                context["remove_webhook"] = not kwargs["data"].pop("webhook")
        except KeyError:
            pass
        return context

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        return Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
            & Q(pk=self.kwargs["workflow_id"])
        )

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        return obj

    def retrieve(self, request, *args, **kwargs):
        obj = get_object_or_404(self.get_queryset())
        workflow = self.serializer_class(obj).data
        if (
            hasattr(obj, "webhook_set")
            and obj.webhook_set.filter(is_zapier=False).exists()
        ):
            workflow["webhook"] = {
                "target": WebHook.objects.get(workflow=obj, is_zapier=False).target
            }
        return Response(workflow)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        if instance.organization.admin.filter(pk=request.user.pk).exists():
            serializer = self.get_serializer(
                instance, data=request.data, partial=partial
            )
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(serializer.data)
        return Response(
            {
                "status_code": 403,
                "errors": [
                    {"message": "You do not have permission to change workflow"}
                ],
            },
            status=403,
        )


class FileUploadView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    parser_classes = [MultiPartParser]

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return workflows.filter(pk=self.kwargs["workflow_id"])

    def post(self, request, *args, **kwargs):
        file_obj = request.data["file"]
        workflow = get_object_or_404(self.get_queryset())
        content = decode_csv(file_obj)
        filename = request.data["file"].name
        source = Source(name=filename, workflow=workflow, created_by=request.user)
        source.save()
        try:
            process_csv(content, workflow=workflow, source=source)
        except Exception as exception:
            return Response(
                {"status_code": 400, "errors": [{"message": str(exception)}]},
                status=400,
            )
        return Response(
            {
                "status_code": 200,
                "message": f"File {filename} was processed and task created",
            },
            status=200,
        )


class ListTaskView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Task.objects.filter(
            Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"])
        )

    def list(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        obj = get_list_or_404(self.get_queryset(), workflow=workflow)
        serializer = self.serializer_class(obj, many=True)
        return Response(serializer.data)


class RUDTaskView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Task.objects.filter(
            Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"])
        )

    def get_object(self):
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.kwargs["task_id"], workflow=workflow)
        return obj

    def retrieve(self, *args, **kwargs):
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.kwargs["task_id"], workflow=workflow)
        sync_workflow_task(workflow, obj)
        task = self.serializer_class(obj).data
        task["status_code"] = 200
        return Response(task, status=200)

    def perform_update(self, serializer, *args, **kwargs):
        serializer.save(owner=self.request.user)


class NextTaskView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Task.objects.filter(
            Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"])
        )

    def get(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        queryset = self.get_queryset()

        # 1 get assigned to self
        with transaction.atomic():
            obj = (
                queryset.filter(status="assigned")
                .filter(assigned_to=request.user)
                .first()
            )
            if obj:
                obj.assigned_at = timezone.now()
                obj.save()
                sync_workflow_task(workflow, obj)
                task = self.serializer_class(obj).data
                task["status_code"] = 200
                return Response(task, status=200)

        # 2 get assigned to someone else and expired
        with transaction.atomic():
            obj = queryset.select_for_update().filter(status="assigned").first()
            if (
                obj
                and obj.assigned_at
                and timezone.now() - obj.assigned_at
                > timezone.timedelta(minutes=settings.TASK_EXPIRATION_MIN)
            ):
                obj.assigned_to = request.user
                obj.assigned_at = timezone.now()
                obj.save()
                sync_workflow_task(workflow, obj)
                task = self.serializer_class(obj).data
                task["status_code"] = 200
                return Response(task, status=200)
            elif obj and not obj.assigned_at:
                # temporary fix for tasks which are assigned but do not have assigned_at
                obj.assigned_at = timezone.now()
                obj.save()

        # 3 get first pending
        with transaction.atomic():
            obj = queryset.select_for_update().filter(status="pending").first()
            if not obj:
                return Response({"status_code": 204}, status=204)
            obj.status = "assigned"
            obj.assigned_to = request.user
            obj.assigned_at = timezone.now()
            obj.save()
            sync_workflow_task(workflow, obj)
            task = self.serializer_class(obj).data
            task["status_code"] = 200
            workflow.n_tasks = F("n_tasks") - 1
            workflow.save()
            return Response(task, status=200)


class UnassignTaskView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Task.objects.filter(
            Q(workflow__in=workflows)
            & Q(workflow=self.kwargs["workflow_id"])
            & Q(pk=self.kwargs["task_id"])
        )

    def get(self, *args, **kwargs):
        queryset = self.get_queryset()
        task = get_object_or_404(queryset)
        if task.status == "completed":
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": f"Task {task.pk} is already completed!"}],
                },
                status=400,
            )
        task.assigned_to = None
        task.status = "pending"
        task.assigned_at = None
        task.save()
        workflow = task.workflow
        with transaction.atomic():
            workflow.n_tasks = F("n_tasks") + 1
            workflow.save()
        return Response(
            {
                "status_code": 200,
                "message": f"Task {task.pk} was unassigned successfully!",
            },
            status=200,
        )

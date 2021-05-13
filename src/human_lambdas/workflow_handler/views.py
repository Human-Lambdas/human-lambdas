import copy
import logging

from django.db import transaction
from django.db.models import OuterRef, Q, Subquery
from django.shortcuts import get_list_or_404, get_object_or_404
from django.utils import timezone
from drf_yasg2.utils import swagger_auto_schema
from rest_framework import request, serializers
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from human_lambdas.data_handler.csv_utils import process_csv
from human_lambdas.data_handler.data_sync import sync_workflow_task
from human_lambdas.external.authentication import TokenAuthentication
from human_lambdas.user_handler.permissions import IsAuthorized, IsOrgAdmin
from human_lambdas.workflow_handler.utils import is_force

from .models import Source, Task, TaskActivity, User, WebHook, Workflow
from .serializers import (
    HookSerializer,
    PendingTaskSerializer,
    TaskSerializer,
    WorkflowSerializer,
)
from .utils import STAFF_ORG_ID, TaskPagination, decode_csv, notify_slack


class RUWebhookView(RetrieveUpdateAPIView, CreateModelMixin):
    permission_classes = (
        IsAuthenticated,
        IsOrgAdmin,
    )
    authentication_classes = (TokenAuthentication, JWTAuthentication)
    serializer_class = HookSerializer

    def get_queryset(self):
        return WebHook.objects.filter(workflow__pk=self.kwargs["workflow_id"])

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        return queryset.first()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        if not instance and request.data["target"]:
            response = self.create(request)
        elif not instance and not request.data["target"]:
            response = Response({"status_code": 204}, status=204)
        elif not request.data["target"]:
            response = self.destroy(request)
        else:
            self.check_object_permissions(self.request, instance)
            serializer = self.get_serializer(
                instance, data=request.data, partial=partial
            )
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            if getattr(instance, "_prefetched_objects_cache", None):
                # If 'prefetch_related' has been applied to a queryset, we need to
                # forcibly invalidate the prefetch cache on the instance.
                instance._prefetched_objects_cache = {}
            response = Response(serializer.data)
        return response

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.check_object_permissions(self.request, instance)
        self.perform_destroy(instance)
        return Response(status=204)

    def perform_destroy(self, instance):
        instance.delete()


logger = logging.getLogger(__name__)


class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = WorkflowSerializer

    def get_queryset(self):

        return Workflow.objects.filter(
            Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)
        )

    def perform_create(self, serializer):
        queryset = self.get_queryset()
        if self.request.data["name"] in queryset.values_list("name", flat=True):
            raise serializers.ValidationError("Workflow with same name already exists")
        serializer.save()


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = WorkflowSerializer
    authentication_classes = (TokenAuthentication, JWTAuthentication)

    def get_queryset(self):
        queryset = Workflow.objects.filter(Q(disabled=False))

        if self.kwargs["org_id"] == STAFF_ORG_ID:
            task_age_subq = Task.objects.filter(
                Q(workflow__id=OuterRef("pk")) & ~Q(status="completed")
            ).order_by("created_at")
            queryset = queryset.annotate(
                oldest_created=Subquery(task_age_subq.values("created_at")[:1])
            ).order_by("oldest_created")
            queryset = queryset.filter(Q(is_running=True))
        else:
            queryset = queryset.filter(Q(organization__pk=self.kwargs["org_id"]))

        task_status = self.request.query_params.get("task_status")
        if task_status:
            queryset = queryset.filter(task__status=task_status).distinct()
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        for d in serializer.data:
            if self.kwargs["org_id"] != STAFF_ORG_ID:
                del d["org_id"]
        return Response(serializer.data)


class BaseWorkflowView(RetrieveAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = WorkflowSerializer
    authentication_classes = (TokenAuthentication, JWTAuthentication)

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
        if self.kwargs["org_id"] == STAFF_ORG_ID:
            queryset = Q(disabled=False) & Q(pk=self.kwargs["workflow_id"])
        else:
            queryset = (
                Q(organization__pk=self.kwargs["org_id"])
                & Q(disabled=False)
                & Q(pk=self.kwargs["workflow_id"])
            )

        return Workflow.objects.filter(queryset)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        return obj

    def _retrieve(self):
        obj = get_object_or_404(self.get_queryset())
        workflow = self.serializer_class(obj).data
        if (
            hasattr(obj, "webhook_set")
            and obj.webhook_set.filter(is_zapier=False).exists()
        ):
            workflow["webhook"] = {
                "target": WebHook.objects.get(workflow=obj, is_zapier=False).target
            }

        return workflow

    def retrieve(self, request, *args, **kwargs):
        return Response(self._retrieve())


class InternalWorkflowView(UpdateModelMixin, BaseWorkflowView):
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        if getattr(instance, "_prefetched_objects_cache", None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class ExternalWorkflowView(BaseWorkflowView):
    def retrieve(self, request, *args, **kwargs):
        workflow = self._retrieve()
        for block in workflow["data"]:
            block.pop("layout", None)
            block.pop("_id", None)

        return Response(workflow)


class FileUploadViewQuerySerializer(serializers.Serializer):
    region = serializers.CharField(required=False)


class FileUploadView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    parser_classes = [MultiPartParser]

    def get_queryset(self):

        workflows = Workflow.objects.filter(
            Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)
        )
        return workflows.filter(pk=self.kwargs["workflow_id"])

    @swagger_auto_schema(query_serializer=FileUploadViewQuerySerializer)
    def post(self, request: request.Request, *args, **kwargs):
        file_obj = request.data["file"]
        workflow: Workflow = get_object_or_404(self.get_queryset())
        content = decode_csv(file_obj)
        filename = request.data["file"].name
        source = Source(name=filename, workflow=workflow, created_by=request.user)
        source.save()
        try:
            process_csv(
                content,
                workflow=workflow,
                source=source,
                user=request.user,
                filename=filename,
                region=request.query_params.get("region", None),
            )
        except Exception as exception:
            return Response(
                {"status_code": 400, "errors": [{"message": str(exception)}]},
                status=400,
            )
        if workflow.is_running:
            notify_slack(f"bulk upload for {workflow.name}", request)

        return Response(
            {
                "status_code": 200,
                "message": f"File {filename} was processed and task created",
            },
            status=200,
        )


class ListTaskView(ListAPIView):
    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = TaskSerializer

    def get_queryset(self):

        workflows = Workflow.objects.filter(
            Q(disabled=False) & Q(organization__pk=self.kwargs["org_id"])
        )
        return (
            Task.objects.defer("data")
            .filter(Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"]))
            .order_by("-created_at")
        )

    def list(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        obj = get_list_or_404(self.get_queryset(), workflow=workflow)
        serializer = self.serializer_class(obj, many=True)
        return Response(serializer.data)


class ListNonCompleteTaskView(ListTaskView):
    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = PendingTaskSerializer
    pagination_class = TaskPagination

    def get_queryset(self, *args, **kwargs):

        workflow = Workflow.objects.filter(
            Q(pk=self.kwargs["workflow_id"]) & Q(disabled=False)
        )
        return (
            Task.objects.defer("data")
            .filter(Q(workflow=workflow.first()) & ~Q(status="completed"))
            .order_by("created_at")
        )

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        filtered_queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(filtered_queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.serializer_class(queryset.all(), many=True)
        return Response(serializer.data)


class RUDTaskView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = TaskSerializer

    def get_queryset(self):

        if self.kwargs["org_id"] == STAFF_ORG_ID:
            queryset = Q(disabled=False)
        else:
            queryset = Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)

        workflows = Workflow.objects.filter(queryset)
        return Task.objects.defer("data").filter(
            Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"])
        )

    def get_object(self):
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.kwargs["task_id"], workflow=workflow)
        return obj

    def retrieve(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.kwargs["task_id"], workflow=workflow)
        if obj.status in ["new", "pending", "open"]:
            obj.assigned_to = request.user
            obj.status = "in_progress"
            obj.assigned_at = timezone.now()
            obj.save()
            TaskActivity(
                task=obj,
                created_by=request.user,
                action="assigned",
                assignee=request.user,
            ).save()
        sync_workflow_task(workflow, obj)
        task = self.serializer_class(obj).data
        task["status_code"] = 200
        return Response(task, status=200)

    def perform_update(self, serializer, *args, **kwargs):
        serializer.save(
            owner=self.request.user,
            submit_task=True,
            force=is_force(self.request.query_params),
        )


class RefreshTaskView(RUDTaskView):
    def retrieve(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.kwargs["task_id"], workflow=workflow)
        sync_workflow_task(workflow, obj)
        task = self.serializer_class(obj).data
        task["status_code"] = 200
        return Response(task, status=200)


class SaveTaskView(RUDTaskView):
    def perform_update(self, serializer, *args, **kwargs):
        serializer.save(
            owner=self.request.user,
            submit_task=False,
            force=is_force(self.request.query_params),
        )


class NextTaskView(APIView):
    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = TaskSerializer

    def get_queryset(self):

        if self.kwargs["org_id"] == STAFF_ORG_ID:
            queryset = Q(disabled=False)
        else:
            queryset = Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)

        workflows = Workflow.objects.filter(queryset)

        return (
            Task.objects.defer("data")
            .filter(Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"]))
            .order_by("created_at")
        )

    def get(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        queryset = self.get_queryset()

        # 1 get assigned to self
        with transaction.atomic():
            obj = (
                queryset.filter(Q(status="assigned") | Q(status="in_progress"))
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

        # 2 get first pending, can take +1.3s
        with transaction.atomic():
            obj = (
                queryset.select_for_update()
                .filter(Q(status="pending") | Q(status="new"))
                .first()  # TODO: Remove pending in the future
            )
            if not obj:
                obj = queryset.select_for_update().filter(status="open").first()
            if obj:
                obj.status = "in_progress"
                obj.assigned_to = request.user
                obj.assigned_at = timezone.now()
                obj.save()
                TaskActivity(
                    task=obj,
                    created_by=request.user,
                    action="assigned",
                    assignee=request.user,
                ).save()
                sync_workflow_task(workflow, obj)
                task = self.serializer_class(obj).data
                task["status_code"] = 200
                return Response(task, status=200)
        return Response(status=204)


class AssignTaskView(APIView):
    permission_classes = (IsAuthenticated, IsAuthorized)

    def get_queryset(self):

        if self.kwargs["org_id"] == STAFF_ORG_ID:
            queryset = Q(disabled=False)
        else:
            queryset = Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)

        workflows = Workflow.objects.filter(queryset)

        return Task.objects.defer("data").filter(
            Q(workflow__in=workflows)
            & Q(workflow=self.kwargs["workflow_id"])
            & Q(pk=self.kwargs["task_id"])
        )

    def get_userset(self):
        return User.objects.filter(
            Q(organization__pk=self.request.user.current_organization_id)
        )

    def post(self, request, *args, **kwargs):
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
        assigned_to = request.data["assigned_to"]
        if not assigned_to:
            task.assigned_to = None
            task.status = "open"
            task.assigned_at = None
            task.save()
            TaskActivity(
                task=task, created_by=request.user, action="assigned", assignee=None
            ).save()
            return Response(
                {
                    "status_code": 200,
                    "message": f"Task {task.pk} was unassigned successfully!",
                    "assigned_to": None,
                },
                status=200,
            )
        else:
            users = self.get_userset()
            user = get_object_or_404(users, pk=assigned_to)
            task.assigned_to = user
            task.status = "in_progress"
            task.assigned_at = timezone.now()
            task.save()
            TaskActivity(
                task=task, created_by=request.user, action="assigned", assignee=user
            ).save()
            return Response(
                {
                    "status_code": 200,
                    "message": f"Task {task.pk} was assigned successfully"
                    f" to {user.name}!",
                    "assigned_to": task.pk,
                },
                status=200,
            )


class CreateTaskFormView(CreateAPIView):
    permission_classes = (IsAuthenticated, IsAuthorized)
    serializer_class = TaskSerializer

    def get_queryset(self):
        workflows = self.workflow_queryset()
        return Task.objects.defer("data").filter(
            Q(workflow__in=workflows) & Q(workflow=self.kwargs["workflow_id"])
        )

    def workflow_queryset(self):

        workflows = Workflow.objects.filter(
            Q(organization__pk=self.kwargs["org_id"]) & Q(disabled=False)
        )
        return workflows

    def get(self, request, *args, **kwargs):
        workflow = get_object_or_404(
            self.workflow_queryset(), pk=self.kwargs["workflow_id"]
        )
        result = []
        for idata in workflow.data:
            if idata[idata["type"]].get("read_only") or idata["type"] in [
                "video",
                "image",
                "audio",
                "embed",
                "named_entity_recognition",
                "pdf",
                "bounding_boxes",
            ]:
                read_data = copy.deepcopy(idata)
                if "layout" in read_data:
                    del read_data["layout"]
                result.append(read_data)
        return Response({"status_code": 200, "data": result}, status=200)

    def post(self, request, *args, **kwargs):
        workflow: Workflow = get_object_or_404(
            self.workflow_queryset(), pk=self.kwargs["workflow_id"]
        )
        ids = [i["id"] for i in request.data["data"]]
        for idata in workflow.data:
            if idata["id"] not in ids:
                request.data["data"].append(idata)

        if workflow.is_running:
            notify_slack(f"Task created via form for {workflow.name}", request)

        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(source_name="manual")

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_handler.models import Organization
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv2task import process_csv
from django.db import transaction
from django.db.models import Q
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.pagination import LimitOffsetPagination

from .serializers import WorkflowSerializer, TaskSerializer
from .models import Workflow, Task


class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def create(self, request, *args, **kwargs):
        if (
            not Organization.objects.filter(pk=kwargs["org_id"])
            .filter(admin=request.user)
            .exists()
        ):
            return Response(
                {"error": "You do not have permission to create workflow"}, status=403
            )
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        return Workflow.objects.filter(
            Q(disabled=False)
            & Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )

    def list(self, request, *args, **kwargs):
        obj = get_list_or_404(self.get_queryset())
        serializer = self.serializer_class(obj, many=True)
        return Response(serializer.data)


class RUDWorkflowView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        return Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        return obj

    def retrieve(self, request, *args, **kwargs):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        workflow = self.serializer_class(obj).data
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
            {"error": "You do not have permission to change workflow"}, status=403
        )


def decode_utf8(input_iterator):
    for line in input_iterator:
        yield line.decode("utf-8")


class FileUploadView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.data["file"]
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        if not workflow:
            raise KeyError(
                "No workflow found for id %s not found", kwargs["workflow_id"]
            )
        content = decode_utf8(file_obj)  # .read()
        try:
            process_csv(content, workflow=workflow)
        except Exception as exception:
            return Response({"error": str(exception)}, status=400)
        return Response(status=200)


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
        task = self.serializer_class(obj).data
        return Response(task)

    def perform_update(self, serializer, *args, **kwargs):
        serializer.save(owner=self.request.user)
        workflow = Workflow.objects.get(id=self.kwargs["workflow_id"])
        workflow.n_tasks -= 1
        workflow.save()


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
        with transaction.atomic():
            obj = queryset.select_for_update().filter(Q(status="pending") & Q(workflow=workflow)).first()
            task = self.serializer_class(obj).data
            if obj:
                obj.status = "assigned"
                obj.save()
                return Response(task)
            else:
                return Response(status=204)


class CreateTaskView(CreateAPIView):
    """
    External API View for creating Tasks
    """

    authentication_classes = (TokenAuthentication,)
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

    def post(self, request, *args, **kwargs):
        workflow = Workflow.objects.get(id=kwargs["workflow_id"])
        if not workflow:
            return Response(
                {
                    "Error": "Workflow with id {} was not found".format(
                        kwargs["workflow_id"]
                    )
                },
                status=404,
            )
        request.data["outputs"] = workflow.outputs
        for task_input in request.data["inputs"]:
            try:
                workflow_input = next(
                    item for item in workflow.inputs if item["id"] == task_input["id"]
                )
            except StopIteration:
                return Response(
                    {
                        "Error": "Cannot find input with input id: {}".format(
                            task_input["id"]
                        )
                    },
                    status=400,
                )
            task_input.update(workflow_input)
        workflow.n_tasks += 1
        workflow.save()
        return self.create(request, *args, **kwargs)


class GetCompletedTaskView(ListAPIView):
    """
    External API View for getting all the Tasks
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer
    pagination_class = LimitOffsetPagination
    paginate_by = 10
    paginate_by_param = "page_size"
    max_paginate_by = 100

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
        queryset = self.filter_queryset(self.get_queryset())
        queryset.filter(workflow=workflow).filter(status="completed")
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        obj = get_list_or_404(
            self.get_queryset(), workflow=workflow, status="completed"
        )
        serializer = self.serializer_class(obj, many=True)
        return Response(serializer.data)

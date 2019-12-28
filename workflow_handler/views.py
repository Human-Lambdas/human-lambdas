from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv2task import process_csv
from django.db.models import Q
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import WorkflowSerializer, TaskSerializer
from .models import Workflow, Task


class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        return Workflow.objects.filter(or_condition)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
        return obj


class RUDWorkflowView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        return Workflow.objects.filter(or_condition)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
        return obj


def decode_utf8(input_iterator):
    for line in input_iterator:
        yield line.decode("utf-8")


class FileUploadView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request, workflow_id, format=None):
        file_obj = request.data["file"]  # request.data['file']
        workflow = Workflow.objects.get(id=workflow_id)
        if not workflow:
            raise KeyError("No workflow found for id %s not found", workflow_id)
        content = decode_utf8(file_obj)  # .read()
        process_csv(content, workflow=workflow)
        return Response(status=200)


class ListTaskView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        workflow_obj = Workflow.objects.filter(or_condition)
        or_condition = Q()
        for workflow in workflow_obj.all():
            or_condition.add(Q(workflow=workflow), Q.OR)
        return Task.objects.filter(or_condition)

    def list(self, request, workflow_id, format=None):
        workflow = Workflow.objects.get(id=workflow_id)
        obj = get_list_or_404(self.get_queryset(), workflow=workflow)
        serializer = self.serializer_class(obj, many=True)
        for task in serializer.data:
            task["outputs"] = workflow.outputs
        return Response(serializer.data)


class RUDTaskView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        workflow_obj = Workflow.objects.filter(or_condition)
        or_condition = Q()
        for workflow in workflow_obj.all():
            or_condition.add(Q(workflow=workflow), Q.OR)
        return Task.objects.filter(or_condition)

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
        task["outputs"] = workflow.outputs
        return Response(task)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class NextTaskView(APIView):
    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        workflow_obj = Workflow.objects.filter(or_condition)
        or_condition = Q()
        for workflow in workflow_obj.all():
            or_condition.add(Q(workflow=workflow), Q.OR)
        return Task.objects.filter(or_condition)

    def get(self, request, workflow_id):
        workflow = Workflow.objects.get(id=workflow_id)
        queryset = self.get_queryset()
        obj = queryset.filter(status="incomplete").first()
        task = self.serializer_class(obj).data
        task["outputs"] = workflow.outputs
        return Response(task)

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
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
    serializer_class = WorkflowSerializer


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        or_condition.add(Q(disabled=False), Q.AND)
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        return Workflow.objects.filter(Q(disabled=False) & or_condition)

    # def get_object(self):
    #     obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
    #     return obj

    def list(self, request, *args, **kwargs):
        obj = get_list_or_404(self.get_queryset())
        serializer = self.serializer_class(obj, many=True)
        for workflow in serializer.data:
            workflow["n_tasks"] = Task.objects.filter(
                workflow__id=workflow["id"], status="pending"
            ).count()
        return Response(serializer.data)


class RUDWorkflowView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        return Workflow.objects.filter(or_condition)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        return obj

    def retrieve(self, request, *args, **kwargs):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["workflow_id"])
        workflow = self.serializer_class(obj).data
        workflow["n_tasks"] = Task.objects.filter(workflow__id=workflow["id"], status="pending").count()
        return Response(workflow)


def decode_utf8(input_iterator):
    for line in input_iterator:
        yield line.decode("utf-8")


class FileUploadView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request, workflow_id, format=None):
        file_obj = request.data["file"]
        workflow = Workflow.objects.get(id=workflow_id)
        if not workflow:
            raise KeyError("No workflow found for id %s not found", workflow_id)
        content = decode_utf8(file_obj)  # .read()
        try:
            process_csv(content, workflow=workflow)
        except Exception as exception:
            return Response({"message": exception}, status=400)
        return Response(status=200)


class ListTaskView(ListAPIView):
    permission_classes = (IsAuthenticated,)
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
        obj = queryset.filter(Q(status="pending") & Q(workflow=workflow)).first()
        task = self.serializer_class(obj).data
        if obj:
            obj.status = "assigned"
            obj.save()
            task["outputs"] = workflow.outputs
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
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        workflow_obj = Workflow.objects.filter(or_condition)
        or_condition = Q()
        for workflow in workflow_obj.all():
            or_condition.add(Q(workflow=workflow), Q.OR)
        return Task.objects.filter(or_condition)

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
        return self.create(request, *args, **kwargs)

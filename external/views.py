import copy

from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from external.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from hl_rest_api import analytics
from user_handler.models import Organization
from user_handler.notifications import send_notification
from user_handler.permissions import IsOrgAdmin
from rest_framework import status
from workflow_handler.audits import GetCompletedTaskView
from workflow_handler.models import Task, Workflow

from .serializers import ExternalTaskSerializer


class GetExternalCompletedTaskView(GetCompletedTaskView):
    """
    External API View for getting all the Tasks
    """

    permission_classes = (IsAuthenticated, IsOrgAdmin)
    authentication_classes = (TokenAuthentication,)
    serializer_class = ExternalTaskSerializer

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        workflow = get_object_or_404(workflows, pk=self.kwargs["workflow_id"])
        analytics.track(
            user.pk, "Get Completed Tasks", {"workflow_id": self.kwargs["workflow_id"]}
        )
        return (
            Task.objects.filter(Q(workflow=workflow) & Q(status="completed"))
            .filter(*args, **kwargs)
            .order_by("-completed_at")
        )


def get_data_value(request_data, w_data):
    input_value = request_data[w_data["id"]]
    if w_data["type"] == "list" and w_data[w_data["type"]]["subtype"] == "number":
        input_value = [float(i) for i in input_value]
    return input_value


class CreateTaskView(CreateAPIView):
    """
    External API View for creating Tasks
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = ExternalTaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"] & Q(disabled=False))
        )
        return Task.objects.filter(
            Q(workflow__in=workflows) & Q(workflow__id=self.kwargs["workflow_id"])
        )

    def post(self, request, *args, **kwargs):
        if "data" not in self.request.data or not self.request.data["data"]:
            return Response(
                {"status_code": 400, "errors": [{"message": "No data"}]}, status=400,
            )
        return self.create(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        formatted_data, workflow = self.preprocess_data()
        serializer = self.get_serializer(data={"data": formatted_data})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        send_notification(workflow)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def preprocess_data(self):
        workflow = get_object_or_404(Workflow, pk=self.kwargs["workflow_id"])
        formatted_data = []
        for w_data in workflow.data:
            task_data = copy.deepcopy(w_data)
            if "layout" in task_data:
                del task_data["layout"]
            try:
                if task_data["type"] not in task_data:
                    task_data[task_data["type"]] = {}
                if w_data["id"] in self.request.data["data"]:
                    #
                    if "data" in w_data[w_data["type"]]:
                        for fs_data in task_data[task_data["type"]]["data"]:
                            fs_data[fs_data["type"]]["value"] = self.request.data[
                                "data"
                            ][w_data["id"]].get(fs_data["id"], None)
                    else:
                        task_data[task_data["type"]]["value"] = get_data_value(
                            self.request.data["data"], task_data
                        )
                else:
                    task_data[task_data["type"]]["value"] = None
            except KeyError:
                raise serializers.ValidationError(
                    "Cannot find data with data id: {}".format(w_data["id"])
                )
            formatted_data.append(task_data)
        return formatted_data, workflow

    def perform_create(self, serializer):
        serializer.save(source_name="api")

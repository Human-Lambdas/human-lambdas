import copy

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_handler.models import Organization
from rest_framework.response import Response
from rest_framework import serializers
from django.db.models import Q
from django.shortcuts import get_object_or_404
from hl_rest_api import analytics
from workflow_handler.models import Workflow, Task
from workflow_handler.audits import GetCompletedTaskView
from user_handler.notifications import send_notification

from .serializers import CompletedTaskSerializer, CreateTaskSerializer


class GetExternalCompletedTaskView(GetCompletedTaskView):
    """
    External API View for getting all the Tasks
    """

    authentication_classes = (TokenAuthentication,)
    serializer_class = CompletedTaskSerializer

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        workflow = get_object_or_404(workflows, pk=self.kwargs["workflow_id"])
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
    permission_classes = (IsAuthenticated,)
    serializer_class = CreateTaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
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

    def perform_create(self, serializer):
        workflow = get_object_or_404(Workflow, pk=self.kwargs["workflow_id"])
        analytics.track(
            self.request.user.pk,
            "Task Create Attempt",
            {
                "user_id": self.request.user.pk,
                "user_email": self.request.user.email,
                "org_id": self.request.user.current_organization_id,
                "workflow_id": workflow.id,
                "source": "API",
            },
        )
        formatted_data = []
        for w_data in workflow.data:
            task_data = copy.deepcopy(w_data)
            if "layout" in task_data:
                del task_data["layout"]
            try:
                if task_data["type"] not in task_data:
                    task_data[task_data["type"]] = {}
                if w_data["id"] in self.request.data["data"]:
                    task_data[task_data["type"]]["value"] = get_data_value(
                        self.request.data["data"], task_data
                    )
            except KeyError:
                raise serializers.ValidationError(
                    "Cannot find data with data id: {}".format(w_data["id"])
                )
            formatted_data.append(task_data)
        serializer.save(data=formatted_data)
        send_notification(workflow)
        analytics.track(
            self.request.user.pk,
            "Task Create Success",
            {
                "user_id": self.request.user.pk,
                "user_email": self.request.user.email,
                "org_id": self.request.user.current_organization_id,
                "workflow_id": workflow.id,
                "source": "API",
            },
        )

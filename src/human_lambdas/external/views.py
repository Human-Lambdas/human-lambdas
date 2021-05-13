from typing import Any, List, Tuple

from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response

from human_lambdas.data_handler.data_transformation import transform_ext2int
from human_lambdas.external.authentication import TokenAuthentication
from human_lambdas.hl_rest_api import analytics
from human_lambdas.user_handler.notifications import send_notification
from human_lambdas.user_handler.permissions import IsOrgAdmin
from human_lambdas.workflow_handler.audits import GetCompletedTaskView
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.utils import notify_slack, parse_dates

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
        workflows = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        workflow = get_object_or_404(
            workflows, pk=self.kwargs.get("queue_id", self.kwargs.get("workflow_id"))
        )
        analytics.track(
            user.pk,
            "Get Completed Tasks",
            {
                "workflow_id": self.kwargs.get(
                    "queue_id", self.kwargs.get("workflow_id")
                )
            },
        )
        return (
            Task.objects.defer("data")
            .filter(
                Q(workflow=workflow)
                & Q(status="completed")
                & Q(completed_at__range=(parse_dates(self.request)))
            )
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
        workflows = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id)
            & Q(organization__pk=self.kwargs["org_id"] & Q(disabled=False))
        )
        return Task.objects.defer("data").filter(
            Q(workflow__in=workflows)
            & Q(
                workflow__id=self.kwargs.get("queue_id", self.kwargs.get("workflow_id"))
            )
        )

    def post(self, request: Request, *args, **kwargs):
        if "data" not in self.request.data or not self.request.data["data"]:
            return Response(
                {"status_code": 400, "errors": [{"message": "No data"}]},
                status=400,
            )
        return self.create(request, *args, **kwargs)

    def create(self, request: Request, *args, **kwargs):
        formatted_data, workflow = self.preprocess_data()

        if workflow.is_running:
            notify_slack(f"API Task created for {workflow.name}", request)

        serializer = self.get_serializer(data={**request.data, "data": formatted_data})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        send_notification(workflow)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def preprocess_data(self) -> Tuple[List[Any], Workflow]:
        workflow: Workflow = get_object_or_404(
            Workflow, pk=self.kwargs.get("queue_id", self.kwargs.get("workflow_id"))
        )
        formatted_data = transform_ext2int(workflow.data, self.request.data["data"])

        return formatted_data, workflow

    def perform_create(self, serializer):
        serializer.save(source_name="api")

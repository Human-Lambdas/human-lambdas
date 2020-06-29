from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv_utils import task_list_to_csv_response
from django.db.models import Q
from django.shortcuts import get_list_or_404
from rest_framework.pagination import LimitOffsetPagination
from user_handler.permissions import IsOrgAdmin

from .serializers import (
    TaskSerializer,
    CompletedTaskSerializer,
    SourceSerializer,
)
from .models import Workflow, Task, Source


def process_query_params(query_params):
    filter_mapper = [
        ("workflow__pk", "workflow_id"),
        ("assigned_to__pk", "worker_id"),
        ("source__pk", "source_id"),
    ]
    filters = {}
    for filter_name, param_name in filter_mapper:
        filter_value = query_params.get(param_name)
        if filter_value:
            filters[filter_name] = filter_value
    return filters


class TaskPagination(LimitOffsetPagination):
    """
    Extended pagination class for Tasks
    """

    default_limit = 100
    max_limit = 1000

    def get_paginated_response(self, data):
        return Response(
            {
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "count": self.count,
                "tasks": data,
            },
            status=200,
        )


class GetCompletedTaskView(ListAPIView):
    """
    API View for getting all the Tasks
    """

    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = CompletedTaskSerializer
    pagination_class = TaskPagination

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return (
            Task.objects.filter(Q(workflow__in=workflows) & Q(status="completed"))
            .filter(*args, **kwargs)
            .order_by("-completed_at")
        )

    def list(self, request, *args, **kwargs):
        filters = process_query_params(request.query_params)
        queryset = self.get_queryset(**filters)
        filtered_queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(filtered_queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.serializer_class(queryset.all(), many=True)
        return Response(serializer.data)


class GetCompletedTasksCSVView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = TaskSerializer

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return (
            Task.objects.filter(Q(workflow__in=workflows) & Q(status="completed"))
            .filter(*args, **kwargs)
            .order_by("-completed_at")
        )

    def get(self, request, *args, **kwargs):
        if "workflow_id" not in request.query_params:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "Need to set workflow_id"}],
                },
                status=400,
            )
        filters = process_query_params(request.query_params)
        tasks = get_list_or_404(self.get_queryset(**filters))
        return task_list_to_csv_response(tasks)


class ListSourcesView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = SourceSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(disabled=False)
            & Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Source.objects.filter(
            workflow__in=workflows, workflow=self.kwargs["workflow_id"]
        )
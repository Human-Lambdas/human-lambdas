from urllib.parse import urlencode

from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv_utils import task_list_to_csv_response
from django.db.models import Q
from django.shortcuts import get_list_or_404, get_object_or_404
from user_handler.permissions import IsOrgAdmin
from next_prev import next_in_order, prev_in_order
from hl_rest_api import analytics

from .utils import TaskPagination, process_query_params
from .serializers import (
    TaskSerializer,
    CompletedTaskSerializer,
    SourceSerializer,
)
from .models import TaskActivity, Workflow, Task, Source


def make_task_filter_url(org_id, task_id, filters):
    if task_id < 0:
        return None
    url = f"/workflows/tasks/{task_id}/audit?{urlencode(filters)}"
    return url


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
            .order_by("completed_at")
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
        analytics.track(
            request.user.pk,
            "Download CSV tasks",
            {"workflow_id": request.query_params["workflow_id"]},
        )
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


class AuditsGetTask(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        filters = process_query_params(self.request.query_params)
        return (
            Task.objects.filter(Q(workflow__in=workflows) & Q(status="completed"))
            .filter(**filters)
            .order_by("-completed_at")
        )

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        obj = get_object_or_404(queryset, pk=kwargs["task_id"])
        self.check_object_permissions(self.request, obj)
        serializer = self.get_serializer(obj)
        next_task = next_in_order(obj, qs=queryset)
        previous_task = prev_in_order(obj, qs=queryset)
        next_task_id = next_task.pk if next_task else -1
        prev_task_id = previous_task.pk if previous_task else -1
        return Response(
            {
                "result": serializer.data,
                "next": make_task_filter_url(
                    kwargs["org_id"], next_task_id, request.query_params
                ),
                "previous": make_task_filter_url(
                    kwargs["org_id"], prev_task_id, request.query_params
                ),
            }
        )

    def put(self, request, *args, **kwargs):
        task = Task.objects.filter(id=kwargs["task_id"]).first()
        if not task or task.status != "completed":
            status = 400
            return Response(
                status=status,
                data={
                    "status_code": status,
                    "errors": [{"message": "task is unknown or incomplete"}],
                },
            )

        task.correct = request.data["correct"]
        task.save()

        action_name_lookup = {
            None: "audited_empty",
            True: "audited_correct",
            False: "audited_incorrect",
        }

        TaskActivity(
            task=task, created_by=request.user, action=action_name_lookup[task.correct],
        ).save()
        return Response()

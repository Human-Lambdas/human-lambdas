from urllib.parse import urlencode

from django.db.models import Q
from django.shortcuts import get_list_or_404, get_object_or_404
from next_prev import next_in_order, prev_in_order
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from human_lambdas.data_handler.csv_utils import task_list_to_csv_response
from human_lambdas.hl_rest_api import analytics
from human_lambdas.user_handler.models import Organization
from human_lambdas.user_handler.permissions import IsInternalWorker, IsOrgAdmin

from .models import Source, Task, TaskActivity, Workflow
from .serializers import (
    SourceSerializer,
    TaskMetadataSerializer,
    TaskSerializer,
)
from .utils import (
    STAFF_ORG_ID,
    TaskPagination,
    parse_dates,
    process_query_params,
)


def make_task_filter_url(org_id, task_id, filters):
    if task_id < 0:
        return None
    url = f"/queues/tasks/{task_id}/audit?{urlencode(filters)}"
    return url


class GetCompletedTaskView(ListAPIView):
    """
    API View for getting all the Tasks
    """

    permission_classes = (IsAuthenticated, IsOrgAdmin.__or__(IsInternalWorker))
    serializer_class = TaskMetadataSerializer
    pagination_class = TaskPagination

    def _get_ownership_filter(self):
        if self.kwargs["org_id"] == STAFF_ORG_ID:
            running_workflows = Workflow.objects.filter(is_running=True, disabled=False)
            staff_users = Organization.objects.get(pk=STAFF_ORG_ID).user.all()
            return Q(workflow__in=running_workflows) | Q(assigned_to__in=staff_users)

        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        owned_workflows = Workflow.objects.filter(
            organization__in=organizations,
            disabled=False,
            organization__pk=self.kwargs["org_id"],
        )
        return Q(workflow__in=owned_workflows)

    def get_queryset(self, *args, **kwargs):
        return (
            Task.objects.defer("data")
            .filter(
                self._get_ownership_filter()
                & Q(status="completed")
                & Q(completed_at__range=(parse_dates(self.request)))
            )
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
            Task.objects.defer("data")
            .filter(
                Q(workflow__in=workflows)
                & Q(status="completed")
                & Q(completed_at__range=(parse_dates(self.request)))
            )
            .filter(*args, **kwargs)
            .order_by("completed_at")
        )

    def get(self, request, *args, **kwargs):
        if "queue_id" not in request.query_params:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "Need to set queue_id"}],
                },
                status=400,
            )
        filters = process_query_params(request.query_params)
        tasks = get_list_or_404(self.get_queryset(**filters))
        analytics.track(
            request.user.pk,
            "Download CSV tasks",
            {"workflow_id": request.query_params["queue_id"]},
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
    permission_classes = (IsAuthenticated, IsOrgAdmin.__or__(IsInternalWorker))
    serializer_class = TaskSerializer

    def _get_ownership_filter(self):
        if self.kwargs["org_id"] == STAFF_ORG_ID:
            running_workflows = Workflow.objects.filter(is_running=True, disabled=False)
            staff_users = Organization.objects.get(pk=STAFF_ORG_ID).user.all()
            return Q(workflow__in=running_workflows) | Q(assigned_to__in=staff_users)

        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        owned_workflows = Workflow.objects.filter(
            organization__in=organizations,
            disabled=False,
            organization__pk=self.kwargs["org_id"],
        )
        return Q(workflow__in=owned_workflows)

    def get_queryset(self):
        filters = process_query_params(self.request.query_params)
        return (
            Task.objects.defer("data")
            .filter(
                self._get_ownership_filter()
                & Q(status="completed")
                & Q(completed_at__range=(parse_dates(self.request)))
            )
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
        if kwargs["org_id"] == STAFF_ORG_ID:
            return Response(
                status=HTTP_400_BAD_REQUEST,
                data={
                    "status_code": HTTP_400_BAD_REQUEST,
                    "errors": [
                        {"message": "Staff members cannot update audit statuses"}
                    ],
                },
            )

        task = Task.objects.defer("data").filter(id=kwargs["task_id"]).first()
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
            task=task,
            created_by=request.user,
            action=action_name_lookup[task.correct],
        ).save()
        return Response()

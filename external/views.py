import copy

from django.utils import timezone
from django.conf import settings
from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    ListAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_handler.models import Organization
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv_utils import process_csv, task_list_to_csv_response
from django.db import transaction
from django.db.models import Q, F
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.pagination import LimitOffsetPagination
from user_handler.permissions import IsOrgAdmin
import analytics

from .serializers import (
    WorkflowSerializer,
    TaskSerializer,
    CompletedTaskSerializer,
    CompletedExternalTaskSerializer,
    SourceSerializer,
)
from .models import Workflow, Task, Source
from .utils import sync_workflow_task, decode_csv


class GetExternalCompletedTaskView(ListAPIView):
    """
    External API View for getting all the Tasks
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = CompletedExternalTaskSerializer
    pagination_class = TaskPagination

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        return Task.objects.filter(
            Q(workflow__in=workflows)
            & Q(workflow=self.kwargs["workflow_id"])
            & Q(status="completed")
        )

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        obj = get_list_or_404(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.serializer_class(obj, many=True)
        return Response(serializer.data)


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
            Q(workflow__in=workflows) & Q(workflow__id=self.kwargs["workflow_id"])
        )

    def post(self, request, *args, **kwargs):
        workflow = Workflow.objects.filter(id=kwargs["workflow_id"]).first()
        if not workflow:
            return Response(
                {
                    "status_code": 404,
                    "errors": [
                        {
                            "message": "Workflow with id {} was not found".format(
                                kwargs["workflow_id"]
                            )
                        }
                    ],
                },
                status=404,
            )
        if not settings.DEBUG:
            analytics.track(
                request.user.pk,
                "Task Create Attempt",
                {
                    "user_id": request.user.pk,
                    "user_email": request.user.email,
                    "org_id": request.user.current_organization_id,
                    "workflow_id": workflow.id,
                    "source": "API",
                },
            )
        request.data["outputs"] = workflow.outputs
        if "inputs" not in request.data or not request.data["inputs"]:
            return Response(
                {"status_code": 400, "errors": [{"message": "No inputs"}]}, status=400,
            )
        formatted_inputs = []
        for w_input in workflow.inputs:
            task_input = copy.deepcopy(w_input)
            try:
                task_input["value"] = request.data["inputs"][w_input["id"]]
            except KeyError:
                return Response(
                    {
                        "status_code": 400,
                        "errors": [
                            {
                                "message": "Cannot find input with input id: {}".format(
                                    w_input["id"],
                                )
                            }
                        ],
                    },
                    status=400,
                )
            formatted_inputs.append(task_input)
        request.data["inputs"] = formatted_inputs
        response = self.create(request, *args, **kwargs)
        if not settings.DEBUG:
            analytics.track(
                request.user.pk,
                "Task Create Success",
                {
                    "user_id": request.user.pk,
                    "user_email": request.user.email,
                    "org_id": request.user.current_organization_id,
                    "workflow_id": workflow.id,
                    "source": "API",
                },
            )
        with transaction.atomic():
            workflow.n_tasks = F("n_tasks") + 1
            workflow.save()
        return response
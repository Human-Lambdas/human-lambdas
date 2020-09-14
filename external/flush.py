from rest_framework.views import APIView
from user_handler.models import Organization
from rest_framework.response import Response
from django.db.models import Q
from django.shortcuts import get_object_or_404
from workflow_handler.models import Workflow, Task
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class FlushTasksView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def get_queryset(self, *args, **kwargs):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(disabled=False)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        workflow = get_object_or_404(workflows, pk=self.kwargs["workflow_id"])
        return Task.objects.filter(
            Q(workflow=workflow) & ~Q(status="completed")
        ).filter(*args, **kwargs)

    def put(self, request, *args, **kwargs):
        self.get_queryset().delete()
        workflow = Workflow.objects.get(pk=self.kwargs["workflow_id"])
        workflow.n_tasks = 0
        workflow.save()
        return Response(
            {
                "status_code": 200,
                "message": f"Workflow {workflow.id} successfully flushed",
            },
            status=200,
        )

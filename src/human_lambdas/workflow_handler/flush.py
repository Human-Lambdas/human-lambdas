from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from human_lambdas.external.authentication import TokenAuthentication
from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, Workflow


class FlushTasksView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, JWTAuthentication)

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
            Task.objects.defer("data")
            .filter(Q(workflow=workflow) & ~Q(status="completed"))
            .filter(*args, **kwargs)
        )

    def put(self, request, *args, **kwargs):
        self.get_queryset().delete()
        workflow = Workflow.objects.get(pk=self.kwargs["workflow_id"])
        workflow.n_tasks = 0
        workflow.save()
        return Response(status=200)

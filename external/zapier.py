from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_handler.models import Organization
from rest_framework.response import Response
from django.db.models import Q, F
from django.shortcuts import get_object_or_404
# from hl_rest_api import analytics
from workflow_handler.models import Workflow


class GetZapierTaskInputs(APIView):
    """
    API View for getting Task inputs for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations) & Q(pk=self.kwargs["workflow_id"])
        )
        return workflows

    def get(self, request, *args, **kwargs):
        obj = get_object_or_404(self.get_queryset())
        children = []
        for w_input in obj.inputs:
            children.append({"key": w_input["id"]})
        result = {"key": "inputs", "label": "Inputs", "children": children, "required": True}
        return Response(result, status=200)


class GetZapierWorkflows(APIView):
    """
    API View for getting Task inputs for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
        )
        return workflows

    def get(self, request, *args, **kwargs):
        choices = {}
        for workflow in self.get_queryset():
            choices[str(workflow.pk)] = workflow.name
        result = {"key": 'workflow_id', "label": "Workflow ID", "choices": choices, "required": True, "altersDynamicFields": True}
        return Response(result, status=200)


class ZapierAuthentication(APIView):
    """
    API View for getting Task inputs for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        return Response(status=200)
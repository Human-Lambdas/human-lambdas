from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization

from .serializers import WorkflowSerializer
from .models import Workflow


class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer


class ListWorkflowView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count() == 1:
            organization = organization_obj.first()
        else:
            raise PermissionError
        return Workflow.objects.filter(organization=organization)


class RUDWorkflowView(RetrieveUpdateAPIView):
    """
    Retrieve and Update for now, will add delete here later
    """

    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count() == 1:
            organization = organization_obj.first()
        else:
            raise PermissionError
        return Workflow.objects.filter(organization=organization)

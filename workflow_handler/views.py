from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization

from .serializers import WorkflowSerializer
from .models import Workflow


# ViewSets define the view behavior.
class CreateWorkflowView(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count()==1:
            organization = organization_obj.first()
        else:
            raise
        return Workflow.objects.filter(organization=organization)


class RUDWorkflowView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count()==1:
            organization = organization_obj.first()
        else:
            raise
        return Workflow.objects.filter(organization=organization)



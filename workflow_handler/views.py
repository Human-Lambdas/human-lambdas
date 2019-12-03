from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import WorkflowCreateSerializer
from .models import Workflow


# ViewSets define the view behavior.
class CreateWorkflowView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Workflow.objects.all()
    serializer_class = WorkflowCreateSerializer

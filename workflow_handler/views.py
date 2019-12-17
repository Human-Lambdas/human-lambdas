from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from user_handler.models import Organization
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from workflow_handler.csv2task import process_csv


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


def decode_utf8(input_iterator):
    for line in input_iterator:
        yield line.decode("utf-8")


class FileUploadView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request, workflow_id, filename, format=None):
        file_obj = request.data["file"]  # request.data['file']
        workflow = Workflow.objects.get(id=workflow_id)
        if not workflow:
            raise KeyError("No workflow found for id %s not found", workflow_id)
        content = decode_utf8(file_obj)  # .read()
        process_csv(content, filename=filename, workflow=workflow)
        return Response(status=204)

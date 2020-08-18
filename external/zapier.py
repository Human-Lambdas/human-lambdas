from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from user_handler.models import Organization
from rest_framework.response import Response
from django.db.models import Q
from django.shortcuts import get_object_or_404
from workflow_handler.models import Workflow, Task, WebHook
from django.conf import settings
from rest_framework import serializers, exceptions
from rest_framework import status


from .views import CreateTaskView


ZAPIER_TYPE_MAPPER = {
    "text": "string",
    "image": "string",
    "number": "integer",
    "date": "string",
    "audio": "string",
    "video": "string",
    # "list": "string",
}


SAMPLE_DATA = {
    "text": "sample text",
    "image": "link/to/image",
    "number": 42,
    "date": "1999/12/31",
    "audio": "link/to/audio",
    "video": "link/to/video",
    "single-selction": "selection",
    "multiple-selection": "[selection1, selection2]",
    "binary": False,
}


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
            Q(organization__in=organizations)
            & Q(pk=self.request.query_params["workflow_id"])
        )
        return workflows

    def get(self, request, *args, **kwargs):
        if not self.request.query_params["workflow_id"]:
            return Response({}, status=200)
        obj = get_object_or_404(self.get_queryset())
        children = []
        for w_input in obj.inputs:
            children.append({"key": w_input["id"]})
        result = {
            "key": "inputs",
            "label": "Inputs",
            "children": children,
            "required": True,
        }
        return Response(result, status=200)


class GetZapierWorkflows(APIView):
    """
    API View for getting workflows for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations) & Q(disabled=False)
        )
        return workflows

    def get(self, request, *args, **kwargs):
        choices = {}
        for workflow in self.get_queryset():
            choices[str(workflow.pk)] = workflow.name
        if request.query_params.get("list", False):
            return Response(
                [
                    {"id": k, "workflow_id": k, "workflow_name": v}
                    for k, v in choices.items()
                ],
                status=200,
            )
        result = {
            "key": "workflow_id",
            "label": "Workflow ID",
            "choices": choices,
            "required": True,
            "altersDynamicFields": True,
        }
        return Response(result, status=200)


class ZapierAuthentication(APIView):
    """
    API View for authentication for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        return Response(status=200)


class ZapierCreateTask(CreateTaskView):
    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflow = Workflow.objects.filter(
            Q(organization__in=organizations) & Q(pk=self.kwargs["workflow_id"])
        )
        return Task.objects.filter(workflows=workflow)


class HookSerializer(serializers.ModelSerializer):
    def validate_event(self, event):
        if event not in settings.HOOK_EVENTS:
            err_msg = "Unexpected event {}".format(event)
            raise exceptions.ValidationError(detail=err_msg)
        return event

    class Meta:
        model = WebHook
        fields = "__all__"


class ZapierHook(CreateAPIView):
    """
    API View for hooks for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = HookSerializer

    def create(self, request, *args, **kwargs):
        # workflow = Workflow.objects.filter(pk=request.data["workflow_id"]).first()
        data = {
            "workflow": request.data["workflow_id"],
            "user": request.user.pk,
            "event": "task.completed",
            "target": request.data["target"],
            "is_zapier": True,
        }
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def delete(self, request, *args, **kwargs):
        instance = WebHook.objects.filter(pk=request.data["hook_id"]).first()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


class GetZapierTaskSampleData(APIView):
    """
    API View for getting Task data for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(pk=self.request.query_params["workflow_id"])
        )
        return Task.objects.filter(workflow=workflows.first(), status="completed")

    def get_workflow(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(pk=self.request.query_params["workflow_id"])
        )
        return workflows.first()

    def get_dict_or_sample(self, queryset):
        if queryset.exists():
            task = queryset.first()
            perform_dict = {t_input["id"]: t_input["value"] for t_input in task.inputs}
            perform_dict.update(
                {
                    t_output["id"]: t_output[t_output["type"]]["value"]
                    for t_output in task.outputs
                }
            )
        else:
            workflow = self.get_workflow()
            perform_dict = {
                w_input["id"]: SAMPLE_DATA[w_input["type"]]
                for w_input in workflow.inputs
            }
            perform_dict.update(
                {
                    w_output["id"]: SAMPLE_DATA[w_output["type"]]
                    for w_output in workflow.outputs
                }
            )
        return perform_dict

    def get(self, request, *args, **kwargs):
        if not self.request.query_params["workflow_id"]:
            return Response({}, status=200)
        perform_dict = self.get_dict_or_sample(self.get_queryset())
        return Response([perform_dict], status=200)

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
from hl_rest_api import analytics


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
    "multiple_selection": "[selection1, selection2]",
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
        for w_input in obj.data:
            children.append({"key": w_input["id"], "label": w_input["name"]})
        result = {
            "key": "data",
            "label": "Data",
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
        resp = {
            "organization": Organization.objects.filter(admin=request.user).first().name
        }
        return Response(resp, status=200)


class ZapierCreateTask(CreateTaskView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflow = Workflow.objects.filter(
            Q(organization__in=organizations) & Q(pk=self.kwargs["workflow_id"])
        )
        return Task.objects.filter(workflows=workflow)

    def perform_create(self, serializer):
        formatted_data, workflow = self.preprocess_data()
        serializer.save(data=formatted_data, source_name="zapier")
        self.create_success(workflow)


class ZapierHookSerializer(serializers.ModelSerializer):
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
    serializer_class = ZapierHookSerializer

    def create(self, request, *args, **kwargs):
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
        analytics.track(
            request.user.pk,
            "Register Zapier Hook",
            {"workflow_id": request.data["workflow_id"]},
        )
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
            perform_dict = {
                t_data["id"]: t_data[t_data["type"]]["value"] for t_data in task.data
            }
            # )
        else:
            workflow = self.get_workflow()
            perform_dict = {
                w_data["id"]: SAMPLE_DATA[w_data["type"]] for w_data in workflow.data
            }
        return perform_dict

    def get(self, request, *args, **kwargs):
        if not self.request.query_params["workflow_id"]:
            return Response({}, status=200)
        perform_dict = self.get_dict_or_sample(self.get_queryset())
        return Response([perform_dict], status=200)

from django.conf import settings
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import exceptions, serializers, status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from human_lambdas.external.authentication import TokenAuthentication
from human_lambdas.hl_rest_api import analytics
from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, WebHook, Workflow

from .views import CreateTaskView

ZAPIER_TYPE_MAPPER = {"number": "number", "binary": "boolean"}


SAMPLE_DATA = {
    "text": "sample text",
    "email": "contact@humanlambdas.com",
    "link": "https://humanlambdas.com",
    "image": "link/to/image",
    "number": 42,
    "date": "1999/12/31",
    "audio": "link/to/audio",
    "video": "link/to/video",
    "single_selection": "selection",
    "multiple_selection": "[selection1, selection2]",
    "binary": False,
    "form_sequence": {
        "id_1": True,
        "id_2": "sample text",
        "id_3": ["option_1", "option_2"],
    },
}


def get_sample_data(block):
    if block["type"] == "single_selection":
        try:
            return block[block["type"]]["options"][0]["id"]
        except IndexError:
            return SAMPLE_DATA[block["type"]]
    if block["type"] == "multiple_selection":
        try:
            return [el["id"] for el in block[block["type"]]["options"][0:2]]
        except IndexError:
            return SAMPLE_DATA[block["type"]]
    if block["type"] == "form_sequence":
        form_data = {q["id"]: get_sample_data(q) for q in block[block["type"]]["data"]}
        return form_data
    if (
        "placeholder" in block[block["type"]]
        and block[block["type"]]["placeholder"] is not None
        and block[block["type"]]["placeholder"] != ""
    ):
        return block[block["type"]]["placeholder"]
    return SAMPLE_DATA[block["type"]]


class GetZapierTaskInputs(APIView):
    """
    API View for getting Task inputs for Zapier
    """

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        workflows = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id)
            & Q(pk=self.request.query_params["workflow_id"])
            & Q(disabled=False)
        )
        return workflows

    def get(self, request, *args, **kwargs):
        if not self.request.query_params["workflow_id"]:
            return Response({}, status=200)
        obj = get_object_or_404(self.get_queryset())
        children = []
        for w_input in obj.data:
            child = {
                "key": w_input["id"],
                "label": w_input["name"],
                "type": (
                    ZAPIER_TYPE_MAPPER[w_input["type"]]
                    if w_input["type"] in ZAPIER_TYPE_MAPPER
                    else "string"
                ),
            }
            if w_input["type"] in ["single_selection", "multiple_selection"]:
                child["choices"] = []
                for option in w_input[w_input["type"]]["options"]:
                    child["choices"].append(
                        {
                            "label": option["name"],
                            "value": option["id"],
                            "sample": option["id"],
                        }
                    )
            if w_input["type"] == "multiple_selection":
                child["list"] = True
            if w_input["type"] == "form_sequence":
                child["dict"] = True
            if w_input["type"] == "named_entity_recognition":
                del child["type"]
                child["children"] = [
                    {"key": "text", "label": "Text", "type": "string"},
                    {
                        "key": "entities",
                        "label": "Entities",
                        "type": "string",
                        "helpText": "Optional field, in JSON format."
                        + "See the Human Lambdas docs for more details.",
                    },
                ]

            children.append(child)
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
        workflows = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id) & Q(disabled=False)
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
            "label": "Workflow",
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
            "organization": Organization.objects.filter(
                pk=request.auth.organization_id, admin=request.user
            )
            .first()
            .name
        }
        return Response(resp, status=200)


class ZapierCreateTask(CreateTaskView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        workflow = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id)
            & Q(pk=self.kwargs["workflow_id"])
            & Q(disabled=False)
        )
        return Task.objects.defer("data").filter(workflows=workflow)

    def perform_create(self, serializer):
        serializer.save(source_name="zapier")


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
        workflows = Workflow.objects.filter(
            Q(organization__pk=self.request.auth.organization_id)
            & Q(pk=self.request.query_params["workflow_id"])
            & Q(disabled=False)
        )
        return (
            Task.objects.defer("data")
            .filter(workflow=workflows.first(), status="completed")
            .order_by("-completed_at")
        )

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
            task = queryset.first().get_simple_formatted_task()
            perform_dict = task["data"]
        else:
            workflow = self.get_workflow()
            perform_dict = {
                w_data["id"]: get_sample_data(w_data) for w_data in workflow.data
            }
        return perform_dict

    def get(self, request, *args, **kwargs):
        if not self.request.query_params["workflow_id"]:
            return Response({}, status=200)
        perform_dict = self.get_dict_or_sample(self.get_queryset())
        return Response([perform_dict], status=200)

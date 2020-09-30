import logging
import uuid

from django.conf import settings
from django.utils import timezone
from rest_framework import serializers, exceptions
from user_handler.models import Organization
from schema import SchemaError
from hl_rest_api.utils import is_valid_url
from django.db import transaction
from django.db.models import Q, F

from .schemas import DATA_SCHEMA
from .models import Workflow, Task, Source, WorkflowNotification, WebHook, TaskActivity


logger = logging.getLogger(__file__)


def validate_output_structure(validated_data_items):
    for validated_data in validated_data_items:
        if validated_data["type"] in ["single_selection", "multiple_selection"]:
            type_data = validated_data.get(validated_data["type"])
            if type_data is None:
                raise serializers.ValidationError(
                    "Type do not match to {}".format(validated_data["type"])
                )
            if "options" not in type_data:
                raise serializers.ValidationError(
                    "Output should have a list of options"
                )
    return validated_data_items


class HookSerializer(serializers.ModelSerializer):
    def validate_event(self, event):
        if event not in settings.HOOK_EVENTS:
            err_msg = "Unexpected event {}".format(event)
            raise exceptions.ValidationError(detail=err_msg)
        return event

    class Meta:
        model = WebHook
        fields = "__all__"
        read_only_fields = ("user", "event", "workflow", "id")

    def create(self, validated_data):
        validated_data["event"] = "task.completed"
        validated_data["user"] = self.context["request"].user
        validated_data["workflow"] = Workflow.objects.get(
            pk=self.context["view"].kwargs["workflow_id"]
        )
        webhook = WebHook(**validated_data)
        webhook.save()
        return webhook


class WorkflowSerializer(serializers.ModelSerializer):
    webhook = HookSerializer(required=False, allow_null=True, write_only=True)
    active_users = serializers.SerializerMethodField(
        "get_active_users", allow_null=True
    )

    class Meta:
        model = Workflow
        fields = [
            "id",
            "name",
            "description",
            "disabled",
            "n_tasks",
            "created_at",
            "webhook",
            "active_users",
            "data",
        ]
        extra_kwargs = {
            "disabled": {"write_only": True},
            "n_tasks": {"read_only": True},
            "id": {"read_only": True},
            "created_at": {"read_only": True},
            "active_users": {"read_only": True},
            "webhook": {"write_only": True},
        }

    def get_active_users(self, instance):
        return list(
            instance.task_set.filter(assigned_to__isnull=False)
            .distinct()
            .values_list("assigned_to__name", flat=True)
        )

    def create(self, validated_data):
        user = self.context["request"].user
        wf_name = validated_data["name"]
        description = validated_data.get("description", "")
        data = validated_data["data"]
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count() == 1:
            organization = organization_obj.first()
        else:
            raise serializers.ValidationError("Organization not found!")
        workflow = Workflow(
            name=wf_name,
            description=description,
            organization=organization,
            created_by=user,
            data=data,
        )
        workflow.save()
        webhook_data = validated_data.get("webhook")
        if webhook_data:
            webhook_data["event"] = "task.completed"
            webhook_data["user"] = user
            webhook_data["workflow"] = workflow
            WebHook.objects.create(**webhook_data)
        for org_user in organization.user.all():
            wfnotification = WorkflowNotification(
                workflow=workflow, notification=org_user.notifications, enabled=True
            )
            wfnotification.save()
        return workflow

    def update(self, instance, validated_data):
        workflow_name = validated_data.get("name")
        if workflow_name:
            if workflow_name in instance.organization.workflow_set.filter(
                ~Q(pk=instance.pk)
            ).values_list("name", flat=True):
                raise serializers.ValidationError(
                    "Workflow with same name already exists"
                )
            instance.name = workflow_name
        instance.description = validated_data.get("description", instance.description)
        instance.data = validated_data.get("data", instance.data)
        disabled = validated_data.get("disabled")
        if disabled:
            instance.disabled = disabled
            instance.name = f"{instance.name}-{uuid.uuid4()}"
            for wnotification in WorkflowNotification.objects.filter(
                workflow=instance
            ).all():
                wnotification.enabled = False
                wnotification.save()
        instance.save()
        webhook_data = validated_data.get("webhook")
        if webhook_data or self.context.get("remove_webhook"):
            hook_instance = WebHook.objects.filter(workflow=instance)
            if hook_instance.exists():
                hook_instance = hook_instance.first()
                if self.context.get("remove_webhook"):
                    hook_instance.delete()
                else:
                    hook_instance.target = webhook_data["target"]
                    hook_instance.save()
            else:
                webhook_data["event"] = "task.completed"
                webhook_data["user"] = self.context["request"].user
                webhook_data["workflow"] = instance
                WebHook.objects.create(**webhook_data)
        return super(WorkflowSerializer, self).update(instance, validated_data)

    def validate_data(self, data):
        try:
            return validate_output_structure(DATA_SCHEMA.validate(data))
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)

    def validate_webhook(self, data):
        if data["target"]:
            if not is_valid_url(data["target"]):
                raise serializers.ValidationError("Not a valid URL set for Webhooks")
        return data


class TaskSerializer(serializers.ModelSerializer):
    workflow = serializers.SerializerMethodField()

    def validate_event(self, event):
        if event not in settings.HOOK_EVENTS:
            err_msg = "Unexpected event {}".format(event)
            raise exceptions.ValidationError(detail=err_msg)
        return event

    class Meta:
        model = Task
        fields = [
            "id",
            "status",
            "created_at",
            "assigned_to",
            "completed_at",
            "data",
            "workflow",
            "workflow_id"
        ]

    def create(self, validated_data):
        source_name = validated_data.get("source_name")
        if not source_name:
            raise serializers.ValidationError("No source name given!")
        data = validated_data["data"]
        workflow = Workflow.objects.get(id=self.context["view"].kwargs["workflow_id"])
        source = Source(
            name=source_name,
            created_by=self.context["request"].user,
            workflow=workflow,
        )
        source.save()
        task = Task(data=data, workflow=workflow, source=source)
        task.save()
        TaskActivity(
            task=task,
            source=source_name,
            created_by=self.context["request"].user,
            action="created",
        ).save()
        with transaction.atomic():
            workflow.n_tasks = F("n_tasks") + 1
            workflow.save()
        return task

    def update(self, instance, validated_data):
        user = self.context["request"].user
        if instance.assigned_to == user:
            instance.data = validated_data.get("data", instance.data)
            if validated_data["submit_task"]:
                instance.status = "completed"
                instance.completed_at = timezone.now()
                instance.save()
                instance.task_completed(user)
                TaskActivity(task=instance, action="completed", created_by=user).save()
                workflow = instance.workflow
                with transaction.atomic():
                    workflow.n_tasks = F("n_tasks") - 1
                    workflow.save()
            else:
                instance.save()
                TaskActivity(task=instance, action="saved", created_by=user).save()
        else:
            raise serializers.ValidationError("User not assigned to task")
        return instance

    def validate_data(self, data):
        try:
            return DATA_SCHEMA.validate(data)
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)

    def get_workflow(self, obj):
        return obj.workflow.name


class CompletedTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task()


class PendingTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_updated_status()


class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Source

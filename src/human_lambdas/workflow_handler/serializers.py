import logging
import uuid

from django.conf import settings
from django.db import transaction
from django.db.models import F, Q
from django.utils import timezone
from rest_framework import exceptions, serializers

from human_lambdas.data_handler.data_validation import (
    DataValidationError,
    data_validation,
)
from human_lambdas.hl_rest_api import analytics
from human_lambdas.hl_rest_api.utils import is_valid_url
from human_lambdas.user_handler.models import Organization

from .models import (
    Source,
    Task,
    TaskActivity,
    WebHook,
    Workflow,
    WorkflowNotification,
)
from .utils import get_session_duration_seconds, notify_staff_run_status

logger = logging.getLogger(__name__)


def clean_form_sequence(data):
    for idata in data:
        if idata["type"] == "form_sequence":
            for form_data in idata["form_sequence"]["data"]:
                form_data[form_data["type"]]["value"] = None


def _validate_automation(instance: Workflow):
    if instance.is_running and instance.task_description is None:
        raise serializers.ValidationError(
            "You must have a task description to automate your queue"
        )


class HookSerializer(serializers.ModelSerializer):
    def validate_event(self, event):
        if event not in settings.HOOK_EVENTS:
            err_msg = "Unexpected event {}".format(event)
            raise exceptions.ValidationError(detail=err_msg)
        return event

    class Meta:
        model = WebHook
        fields = ("target", "user", "event", "workflow", "id")
        read_only_fields = ("user", "event", "workflow", "id")

    def create(self, validated_data):
        validated_data["event"] = "task.completed"
        validated_data["user"] = self.context["request"].user
        validated_data["workflow"] = Workflow.objects.get(
            pk=self.context["view"].kwargs["workflow_id"]
        )
        webhook = WebHook(**validated_data)
        webhook.save()
        analytics.track(
            self.context["request"].user.pk,
            "Register Webhook",
            {"workflow_id": self.context["view"].kwargs["workflow_id"]},
        )
        return webhook


class WorkflowSerializer(serializers.ModelSerializer):
    webhook = HookSerializer(required=False, allow_null=True, write_only=True)
    active_users = serializers.SerializerMethodField(
        "get_active_users", allow_null=True
    )
    org_id = serializers.SerializerMethodField("get_org_id", read_only=True)

    class Meta:
        model = Workflow
        fields = [
            "id",
            "name",
            "disabled",
            "n_tasks",
            "created_at",
            "webhook",
            "active_users",
            "org_id",
            "data",
            "is_running",
            "task_description",
            "guidelines_url",
            "pinned_block",
        ]
        extra_kwargs = {
            "disabled": {"write_only": True},
            "n_tasks": {"read_only": True},
            "id": {"read_only": True},
            "created_at": {"read_only": True},
            "active_users": {"read_only": True},
            "webhook": {"write_only": True},
        }

    def get_org_id(self, instance):
        return instance.organization_id

    def get_active_users(self, instance):
        return list(
            instance.task_set.filter(
                Q(assigned_to__isnull=False), ~Q(status="completed")
            )
            .distinct()
            .values_list("assigned_to__name", flat=True)
        )

    def create(self, validated_data):
        user = self.context["request"].user
        wf_name = validated_data["name"]
        data = validated_data["data"]
        clean_form_sequence(data)
        organization_obj = Organization.objects.filter(
            user=user, pk=int(self.context["view"].kwargs["org_id"])
        )
        if organization_obj.exists() and organization_obj.count() == 1:
            organization = organization_obj.first()
        else:
            raise serializers.ValidationError("Organization not found!")
        workflow = Workflow(
            name=wf_name,
            organization=organization,
            created_by=user,
            data=data,
            is_running=validated_data.get("is_running", False),
            guidelines_url=validated_data.get("guidelines_url"),
            task_description=validated_data.get("task_description"),
        )
        _validate_automation(workflow)
        workflow.save()
        analytics.track(
            user.pk, "Created Workflow", {"name": wf_name, "workflow_id": workflow.pk}
        )
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
        data = validated_data.get("data")
        if data:
            clean_form_sequence(data)
            instance.data = data
        disabled = validated_data.get("disabled")
        if disabled:
            instance.disabled = disabled
            instance.name = f"{instance.name}-{uuid.uuid4()}"
            for wnotification in WorkflowNotification.objects.filter(
                workflow=instance
            ).all():
                wnotification.enabled = False
                wnotification.save()

        if "is_running" in validated_data:
            instance.is_running = validated_data["is_running"]

        if "guidelines_url" in validated_data:
            instance.guidelines_url = validated_data["guidelines_url"]
            if not instance.guidelines_url is None and not is_valid_url(
                instance.guidelines_url
            ):
                raise serializers.ValidationError("guidelines URL is invalid")

        if "task_description" in validated_data:
            instance.task_description = validated_data["task_description"]

        _validate_automation(instance)
        instance.save()

        if "is_running" in validated_data:
            notify_staff_run_status(validated_data, self.context["request"])

        event_name = "Deleted" if disabled else "Updated"
        analytics.track(
            self.context["request"].user.pk,
            "%s Workflow" % event_name,
            {"name": instance.name, "workflow_id": instance.pk},
        )
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
        if not data:
            raise serializers.ValidationError("Workflow cannot be empty")
        try:
            return data_validation(data, is_workflow=True)
        except DataValidationError as exception_text:
            raise serializers.ValidationError(exception_text)

    def validate_webhook(self, data):
        if data["target"]:
            if not is_valid_url(data["target"]):
                raise serializers.ValidationError("Not a valid URL set for Webhooks")
        return data


class TaskSerializer(serializers.ModelSerializer):
    workflow = serializers.SerializerMethodField()
    workflow_id = serializers.SerializerMethodField()
    n_comments = serializers.SerializerMethodField()

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
            "workflow_id",
            "n_comments",
            "correct",
            "region",
        ]

    def create(self, validated_data):
        logger.info(f"taskserializer: create")
        source_name = validated_data.get("source_name")
        if not source_name:
            raise serializers.ValidationError("No source name given!")
        data = validated_data["data"]
        workflow_id = (
            self.context["view"].kwargs["queue_id"]
            if "queue_id" in self.context["view"].kwargs
            else self.context["view"].kwargs["workflow_id"]
        )
        workflow = Workflow.objects.get(id=workflow_id)
        source = Source(
            name=source_name,
            created_by=self.context["request"].user,
            workflow=workflow,
        )
        source.save()
        region = validated_data.get("region")
        task = Task(
            data=data,
            workflow=workflow,
            source=source,
            region=None if region in ["EU", None] else region,
        )
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

        analytics.track(
            self.context["request"].user.pk,
            "Task Created",
            {
                "org_id": workflow.organization.pk,
                "workflow_id": workflow.id,
                "source": source_name,
            },
        )

        return task

    def update(self, instance, validated_data):
        logger.info(f"taskserializer: update")
        user = self.context["request"].user
        if instance.status == "completed" and not validated_data["force"]:
            raise serializers.ValidationError("Cannot change a completed task")
        elif instance.assigned_to == user:
            instance.data = validated_data.get("data", instance.data)

            instance.handling_time_seconds += get_session_duration_seconds(instance)
            instance.session_started_at = None

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
            event_name = "Completed" if validated_data["submit_task"] else "Saved"
            analytics.track(
                user.pk,
                "Task %s" % event_name,
                {
                    "org_id": instance.workflow.organization.pk,
                    "workflow_id": instance.workflow.id,
                    "source": instance.source.name,
                },
            )
        else:
            raise serializers.ValidationError("User not assigned to task")
        return instance

    def validate_data(self, data):
        try:
            return data_validation(data)
        except DataValidationError as exception_text:
            raise serializers.ValidationError(exception_text)

    def get_workflow(self, obj):
        return obj.workflow.name

    def get_workflow_id(self, obj):
        return obj.workflow.pk

    def get_n_comments(self, obj):
        return obj.taskactivity_set.filter(action="comment").count()

    def to_representation(self, instance):
        return instance.get_formatted_task()


class TaskMetadataSerializer(TaskSerializer):
    def to_representation(self, instance: Task):
        return instance.get_formatted_task(include_data=False)


class PendingTaskSerializer(TaskMetadataSerializer):
    def to_representation(self, instance):
        return instance.get_updated_status()


class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Source

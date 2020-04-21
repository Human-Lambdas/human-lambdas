import logging

from django.conf import settings
from django.utils import timezone
from rest_framework import serializers, exceptions
from user_handler.models import Organization
from schema import SchemaError

from .models import Workflow, Task, WorkflowHook
from .schemas import (
    WORKFLOW_INPUT_SCHEMA,
    TASK_INPUT_SCHEMA,
    OUTPUT_SCHEMA,
    UPDATE_OUTPUT_SCHEMA,
)

logger = logging.getLogger(__file__)


def validate_output_structure(validated_data_items):
    for validated_data in validated_data_items:
        if validated_data["type"] in ["single-selection", "multiple-selection"]:
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
        model = WorkflowHook
        fields = "__all__"
        read_only_fields = ("user", "event", "workflow", "id")


class WorkflowSerializer(serializers.ModelSerializer):
    webhook = HookSerializer(required=False)

    class Meta:
        model = Workflow
        fields = [
            "id",
            "name",
            "description",
            "inputs",
            "outputs",
            "disabled",
            "n_tasks",
            "created_at",
            "webhook",
        ]
        extra_kwargs = {
            "disabled": {"write_only": True},
            "n_tasks": {"read_only": True},
            "id": {"read_only": True},
            "created_at": {"read_only": True},
        }

    def create(self, validated_data):
        user = self.context["request"].user
        wf_name = validated_data["name"]
        description = validated_data["description"]
        inputs = validated_data["inputs"]
        outputs = validated_data["outputs"]
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
            inputs=inputs,
            outputs=outputs,
        )
        workflow.save()
        webhook_data = validated_data.get("webhook")
        if webhook_data:
            webhook_data["event"] = "task.completed"
            webhook_data["user"] = user
            WorkflowHook.objects.create(workflow=workflow, **webhook_data)
        return workflow

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.inputs = validated_data.get("inputs", instance.inputs)
        instance.outputs = validated_data.get("outputs", instance.outputs)
        instance.disabled = validated_data.get("disabled", instance.disabled)
        instance.save()
        webhook_data = validated_data.get("webhook")
        if webhook_data or self.context.get("remove_webhook"):
            hook_instance = WorkflowHook.objects.filter(workflow=instance)
            if hook_instance.exists():
                hook_instance = hook_instance.first()
                if self.context.get("remove_webhook"):
                    hook_instance.delete()
                else:
                    hook_instance.target = webhook_data["target"]
                    hook_instance.save()
            else:
                webhook_data["workflow"] = instance
                webhook_data["event"] = "task.completed"
                webhook_data["user"] = self.context["request"].user
                WorkflowHook.objects.create(**webhook_data)
        return super(WorkflowSerializer, self).update(instance, validated_data)

    def validate_inputs(self, data):
        try:
            return WORKFLOW_INPUT_SCHEMA.validate(data)
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)

    def validate_outputs(self, data):
        try:
            return validate_output_structure(OUTPUT_SCHEMA.validate(data))
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)


class TaskSerializer(serializers.ModelSerializer):
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
            "inputs",
            "outputs",
            "assigned_to",
            "completed_at",
        ]

    def create(self, validated_data):
        inputs = validated_data["inputs"]
        outputs = validated_data["outputs"]
        workflow = Workflow.objects.get(id=self.context["view"].kwargs["workflow_id"])
        task = Task(inputs=inputs, outputs=outputs, workflow=workflow)
        task.save()
        return task

    def update(self, instance, validated_data):
        inputs = validated_data.get("inputs")
        outputs = validated_data.get("outputs")
        if not outputs:
            raise serializers.ValidationError("You can only update outputs of tasks")
        user = self.context["request"].user
        instance.status = "completed"
        instance.completed_at = timezone.now()
        instance.assigned_to = user
        instance.inputs = inputs
        instance.outputs = outputs
        instance.save()
        instance.task_completed(user)
        return instance

    def validate_inputs(self, data):
        try:
            return TASK_INPUT_SCHEMA.validate(data)
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)

    def validate_outputs(self, data):
        try:
            if self.partial:
                return UPDATE_OUTPUT_SCHEMA.validate(data)
            else:
                return validate_output_structure(OUTPUT_SCHEMA.validate(data))
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)


class CompletedTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task()

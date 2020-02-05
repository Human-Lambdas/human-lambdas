import logging

from django.utils import timezone
from rest_framework import serializers
from user_handler.models import Organization
from schema import SchemaError

from .models import Workflow, Task
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


class WorkflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workflow
        fields = ["id", "name", "description", "inputs", "outputs", "disabled"]
        extra_kwargs = {"disabled": {"write_only": True}}

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
        return workflow

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.inputs = validated_data.get("inputs", instance.inputs)
        instance.outputs = validated_data.get("outputs", instance.outputs)
        instance.disabled = validated_data.get("disabled", instance.disabled)
        instance.save()
        return instance

    def validate_inputs(self, data):
        try:
            return WORKFLOW_INPUT_SCHEMA.validate(data)
        except SchemaError as exception:
            raise serializers.ValidationError(exception)

    def validate_outputs(self, data):
        try:
            return validate_output_structure(OUTPUT_SCHEMA.validate(data))
        except SchemaError as exception:
            raise serializers.ValidationError(exception)


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "status", "created_at", "inputs", "outputs"]

    def update(self, instance, validated_data):
        outputs = validated_data.get("outputs")
        if not outputs:
            raise serializers.ValidationError("You can only update outputs of tasks")
        for output in outputs:
            instance_output = next(
                item for item in instance.outputs if item["id"] == output["id"]
            )
            itype = instance_output["type"]
            if itype not in instance_output:
                instance_output[itype] = {}
            instance_output[itype]["value"] = output[itype]["value"]
        instance.status = "completed"
        instance.completed_at = timezone.now()  # datetime.datetime.now()
        instance.completed_by = self.context["request"].user
        instance.save()
        return instance

    def validate_inputs(self, data):
        try:
            return TASK_INPUT_SCHEMA.validate(data)
        except SchemaError as exception:
            raise serializers.ValidationError(exception)

    def validate_outputs(self, data):
        try:
            if self.partial:
                return UPDATE_OUTPUT_SCHEMA.validate(data)
            else:
                return validate_output_structure(OUTPUT_SCHEMA.validate(data))
        except SchemaError as exception:
            raise serializers.ValidationError(exception)

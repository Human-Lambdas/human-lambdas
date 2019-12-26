import logging

from django.utils import timezone
from rest_framework import serializers
from user_handler.models import Organization

from .models import Workflow, Task

logger = logging.getLogger(__file__)

_INPUT_TUPLES = [
    ("id", str),
    ("name", str),
    ("type", str),
]

_INPUT_FORMATS = ["image", "text"]

_OUTPUT_TUPLES = [
    ("id", str),
    ("name", str),
    ("type", str),
]

_OUTPUT_FORMAT_TYPES = {
    "single-class": list,
    "multi-class": list,
    "binary": None,
    "freetext": None,
}


class WorkflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workflow
        fields = ["id", "name", "description", "inputs", "outputs"]

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
        return validated_data

    def update_partial(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.inputs = validated_data.get("inputs", instance.inputs)
        instance.outputs = validated_data.get("outputs", instance.outputs)
        instance.save()
        return instance

    def validate_inputs(self, data):
        if len(data) == 0:
            raise serializers.ValidationError("Inputs cannot be empty")
        for data_dict in data:
            for inp_key, inp_type in _INPUT_TUPLES:
                try:
                    if not isinstance(data_dict[inp_key], inp_type):
                        raise serializers.ValidationError(
                            "'{0}' is of type {1} when expected {2}".format(
                                inp_key, type(data_dict[inp_key]), inp_type
                            )
                        )
                    if inp_key == "type":
                        if data_dict[inp_key] not in _INPUT_FORMATS:
                            raise serializers.ValidationError(
                                "Input format should be one of following: {0}".format(
                                    _INPUT_FORMATS
                                )
                            )
                except KeyError:
                    raise serializers.ValidationError(
                        "Input missing key '{0}'".format(inp_key)
                    )
        return data

    def validate_outputs(self, data):
        if len(data) == 0:
            raise serializers.ValidationError("Outputs cannot be empty")
        for data_dict in data:
            for out_key, out_type in _OUTPUT_TUPLES:
                try:
                    if not isinstance(data_dict[out_key], out_type):
                        raise serializers.ValidationError(
                            "'{0}' is of type {1} when expected {2}".format(
                                out_key, type(data_dict[out_key]), out_type
                            )
                        )
                    if out_key == "type":
                        ftype = data_dict[out_key]
                        if ftype not in _OUTPUT_FORMAT_TYPES:
                            raise serializers.ValidationError(
                                "Output format type should be one of following: {0}".format(
                                    list(_OUTPUT_FORMAT_TYPES.keys())
                                )
                            )
                        if _OUTPUT_FORMAT_TYPES[ftype]:
                            if not isinstance(
                                data_dict.get(ftype),
                                _OUTPUT_FORMAT_TYPES[ftype],
                            ):
                                raise serializers.ValidationError(
                                    "Expecting a key {0} with the value of list of strings".format(
                                        ftype
                                    )
                                )
                except KeyError:
                    raise serializers.ValidationError(
                        "Input missing key '{0}'".format(out_key)
                    )
        return data


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "status", "created_at", "inputs", "outputs"]

    def update(self, instance, validated_data):
        outputs = validated_data.get("outputs")
        if not outputs:
            raise serializers.ValidationError("You can only update outputs of tasks")
        instance.outputs = outputs
        instance.status = "completed"
        instance.completed_at = timezone.now()  # datetime.datetime.now()
        instance.completed_by = self.context["request"].user
        instance.save()
        return instance

    def validate_inputs(self, data):
        if len(data) == 0:
            raise serializers.ValidationError("Inputs cannot be empty")
        for data_dict in data:
            for inp_key, inp_type in _INPUT_TUPLES:
                try:
                    if not isinstance(data_dict[inp_key], inp_type):
                        raise serializers.ValidationError(
                            "'{0}' is of type {1} when expected {2}".format(
                                inp_key, type(data_dict[inp_key]), inp_type
                            )
                        )
                    if inp_key == "type":
                        if data_dict[inp_key] not in _INPUT_FORMATS:
                            raise serializers.ValidationError(
                                "Input format should be one of following: {0}".format(
                                    _INPUT_FORMATS
                                )
                            )
                except KeyError:
                    raise serializers.ValidationError(
                        "Input missing key '{0}'".format(inp_key)
                    )
        return data

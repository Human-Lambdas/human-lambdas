import logging

from rest_framework import serializers
from user_handler.models import User, Organization

from .models import Workflow, Task

logger = logging.getLogger(__file__)

_INPUT_TUPLES = [
    ("key", str),
    ("name", str),
    ("format", str),
]

_INPUT_FORMATS = ['image', 'text']

_OUTPUT_TUPLES = [
    ("key", str),
    ("name", str),
    ("format", dict),
]

_OUTPUT_FORMAT_TYPES = {
    'single-class': list,
    'multi-class': list,
    'binary':  None,
    'freetext': None,
}

class WorkflowCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workflow
        fields = ['name', 'description', 'inputs', 'outputs']

    def create(self, validated_data):
        user = self.context['request'].user
        wf_name = validated_data['name']
        description = validated_data['description']
        inputs = validated_data['inputs']
        outputs = validated_data['outputs']
        organization_obj = Organization.objects.filter(user=user)
        if organization_obj.exists() and organization_obj.count()==1:
            organization = organization_obj.first()
        else:
            raise serializers.ValidationError("Organization not found!")
        workflow = Workflow(
            name=wf_name,
            description=description,
            organization=organization,
            created_by=user,
            inputs=inputs,
            outputs=outputs
        )
        workflow.save()
        return validated_data

    def validate_inputs(self, data):
        if len(data) == 0:
            raise serializers.ValidationError("Inputs cannot be empty")
        for data_dict in data:
            for inp_key, inp_type in _INPUT_TUPLES:
                try:
                    if not isinstance(data_dict[inp_key], inp_type):
                        raise serializers.ValidationError("'{0}' is of type {1} when expected {2}".format(inp_key, type(data_dict[inp_key]), inp_type))
                    if inp_key == "format":
                        if data_dict[inp_key] not in _INPUT_FORMATS:
                            raise serializers.ValidationError("Input format should be one of following: {0}".format(_INPUT_FORMATS))
                except KeyError:
                    raise serializers.ValidationError("Input missing key '{0}'".format(inp_key))
        return data

    def validate_outputs(self, data):
        if len(data) == 0:
            raise serializers.ValidationError("Outputs cannot be empty")
        for data_dict in data:
            for out_key, out_type in _OUTPUT_TUPLES:
                try:
                    if not isinstance(data_dict[out_key], out_type):
                        raise serializers.ValidationError("'{0}' is of type {1} when expected {2}".format(out_key, type(data_dict[out_key]), out_type))
                    if out_key == "format":
                        ftype = data_dict[out_key]["type"]
                        if ftype not in _OUTPUT_FORMAT_TYPES:
                            raise serializers.ValidationError("Output format type should be one of following: {0}".format(list(_OUTPUT_FORMAT_TYPES.keys())))
                        if _OUTPUT_FORMAT_TYPES[ftype]:
                            if not isinstance(data_dict[out_key].get(ftype),_OUTPUT_FORMAT_TYPES[ftype]):
                                raise serializers.ValidationError("Expecting a key {0} with the value of list of strings".format(ftype))
                except KeyError:
                    raise serializers.ValidationError("Input missing key '{0}'".format(out_key))
        return data

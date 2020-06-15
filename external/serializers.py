from workflow_handler.serializers import BaseTaskSerializer, TaskSerializer
from schema import SchemaError, Schema
from rest_framework import serializers


class CreateTaskSerializer(BaseTaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

    def validate_inputs(self, data):
        if not data:
            raise serializers.ValidationError("No data in inputs!")
        try:
            return Schema(dict).validate(data)
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)


class CompletedTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

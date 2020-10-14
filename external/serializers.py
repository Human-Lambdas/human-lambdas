from workflow_handler.serializers import TaskSerializer
from schema import SchemaError, Schema
from rest_framework import serializers


class CreateTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

    def validate_data(self, data):
        if not data:
            raise serializers.ValidationError("No data in inputs!")
        try:
            return Schema(dict).validate(data)
        except SchemaError as exception_text:
            raise serializers.ValidationError(exception_text)


class CompletedTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

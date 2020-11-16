from rest_framework import serializers
from schema import Schema, SchemaError
from workflow_handler.serializers import TaskSerializer


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


class ExternalCompletedTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

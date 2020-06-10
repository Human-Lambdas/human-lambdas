from workflow_handler.serializers import TaskSerializer


class CompletedExternalTaskSerializer(TaskSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()
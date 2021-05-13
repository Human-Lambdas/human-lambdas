from human_lambdas.workflow_handler.serializers import TaskMetadataSerializer


class ExternalTaskSerializer(TaskMetadataSerializer):
    def to_representation(self, instance):
        return instance.get_formatted_task_external()

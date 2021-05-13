import analytics
from django.apps import AppConfig
from django.conf import settings


class WorkflowHandlerConfig(AppConfig):
    name = "human_lambdas.workflow_handler"

    def ready(self):
        analytics.write_key = settings.SEGMENT_KEY

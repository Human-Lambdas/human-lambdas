from django.apps import AppConfig
from django.conf import settings
import analytics


class WorkflowHandlerConfig(AppConfig):
    name = "workflow_handler"

    def ready(self):
        analytics.write_key = settings.SEGMENT_KEY

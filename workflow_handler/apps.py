from django.apps import AppConfig

import analytics


class WorkflowHandlerConfig(AppConfig):
    name = "workflow_handler"

    def ready(self):
        analytics.write_key = "WPaNpRkJK2VIxuIZ0GPHCpla2ch4hhM1"

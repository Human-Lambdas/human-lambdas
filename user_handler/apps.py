from django.apps import AppConfig
from django.conf import settings

import analytics


class UserHandlerConfig(AppConfig):
    name = "user_handler"

    def ready(self):
        analytics.write_key = settings.SEGMENT_KEY

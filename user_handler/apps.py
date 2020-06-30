from django.apps import AppConfig
from django.conf import settings
import analytics
from hl_rest_api.email_client import SendGrid


class UserHandlerConfig(AppConfig):
    name = "user_handler"
    emailclient = SendGrid()

    def ready(self):
        analytics.write_key = settings.SEGMENT_KEY

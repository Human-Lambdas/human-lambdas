import analytics
from django.apps import AppConfig
from django.conf import settings

from human_lambdas.hl_rest_api.email_client import SendGrid


class UserHandlerConfig(AppConfig):
    name = "human_lambdas.user_handler"
    emailclient = SendGrid()

    def ready(self):
        analytics.write_key = settings.SEGMENT_KEY

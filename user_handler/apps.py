from django.apps import AppConfig

import analytics


class UserHandlerConfig(AppConfig):
    name = "user_handler"

    def ready(self):
        analytics.write_key = "WPaNpRkJK2VIxuIZ0GPHCpla2ch4hhM1"

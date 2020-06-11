import analytics
from django.conf import settings


def identify(*args):
    if not settings.DEBUG:
        analytics.identify(*args)


def track(*args):
    if not settings.DEBUG:
        analytics.track(*args)

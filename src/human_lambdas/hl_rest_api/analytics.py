import analytics
from django.conf import settings

from .hl_client import enqueue_signup


def alias(new_id, old_id):
    if not settings.DEBUG:
        try:
            analytics.alias(new_id, old_id)
        except:
            pass


def identify(*args):
    if not settings.DEBUG:
        try:
            analytics.identify(*args)
        except:
            pass


def track(*args):
    if not settings.DEBUG:
        try:
            analytics.track(*args)
        except:
            pass


def signup_events(user_obj, organization_obj):
    data = {
        "org_id": organization_obj.pk,
        "org_name": organization_obj.name,
        "user_id": user_obj.pk,
        "email": user_obj.email,
        "name": user_obj.name,
        "is_admin": True,
    }
    identify(
        user_obj.pk,
        data,
    )
    track(user_obj.pk, "New Organization", {"source": "website signup"})
    track(user_obj.pk, "User Signup", {"source": "website"})
    enqueue_signup(user_obj.pk, user_obj.email, user_obj.name)

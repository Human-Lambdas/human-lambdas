import analytics
from django.conf import settings


def identify(*args):
    if not settings.DEBUG:
        analytics.identify(*args)


def track(*args):
    if not settings.DEBUG:
        analytics.track(*args)


def register_events(user_obj, organization_obj, existing_org):
    data = {
        "org_id": organization_obj.pk,
        "org_name": organization_obj.name,
        "user_id": user_obj.pk,
        "user_email": user_obj.email,
    }
    identify(
        user_obj.pk, data,
    )
    if not existing_org:
        track(
            user_obj.pk, "Org Created", data,
        )
    track(
        user_obj.pk, "User Created", data,
    )

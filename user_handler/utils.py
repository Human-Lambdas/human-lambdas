import logging

from hl_rest_api import analytics

logger = logging.getLogger(__file__)


def register_events(user_obj, organization_obj, existing_org):
    analytics.identify(
        user_obj.pk,
        {
            "org_id": organization_obj.pk,
            "org_name": organization_obj.name,
            "user_id": user_obj.pk,
            "user_email": user_obj.email,
        },
    )
    if not existing_org:
        analytics.track(
            user_obj.pk,
            "Org Created",
            {
                "org_id": organization_obj.pk,
                "org_name": organization_obj.name,
                "user_id": user_obj.pk,
                "user_email": user_obj.email,
            },
        )
    analytics.track(
        user_obj.pk,
        "User Created",
        {
            "org_id": organization_obj.pk,
            "org_name": organization_obj.name,
            "user_id": user_obj.pk,
            "user_email": user_obj.email,
        },
    )

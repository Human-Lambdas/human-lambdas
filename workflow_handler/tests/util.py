from typing import Dict

from django.core import management
from rest_framework.test import APITestCase

from user_handler.models import Organization, User
from workflow_handler.utils import TEMPLATE_ORG_ID


class HLTestCase(APITestCase):
    def register(
        self,
        registration_data: Dict[str, str],
        is_super_admin: bool = False,
        is_internal_worker: bool = False,
    ) -> str:
        _ = self.client.post("/v1/users/register", registration_data)
        response = self.client.post(
            "/v1/users/token",
            {
                "email": registration_data["email"],
                "password": registration_data["password"],
            },
        )
        if is_super_admin:
            management.call_command("createsuperadmin", registration_data["email"])
        elif is_internal_worker:
            templates_org, _created = Organization.objects.get_or_create(
                id=TEMPLATE_ORG_ID, name="templates"
            )
            user = User.objects.get(email=registration_data["email"])
            templates_org.user.add(user)

        return response.data["access"]

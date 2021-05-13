from typing import Any, Dict, Optional

from django.core import management
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.utils import STAFF_ORG_ID


class HLTestCase(APITestCase):
    org_id: Optional[str]

    def register(
        self,
        registration_data: Dict[str, str],
        is_super_admin: bool = False,
        is_internal_worker: bool = False,
    ) -> Dict[Any, Any]:
        reg_response = self.client.post("/v1/users/register", registration_data)
        token_response = self.client.post(
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
                id=STAFF_ORG_ID, name="staff"
            )
            user = User.objects.get(email=registration_data["email"])
            templates_org.user.add(user)

        assert token_response.status_code == 200
        return {**token_response.data, **reg_response.data}

    def create_workflow(
        self, data: Dict[str, Any], org_id: Optional[str] = None
    ) -> Dict[str, Any]:
        response = self.client.post(
            f"/v1/orgs/{org_id or self.org_id}/workflows/create",
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        return response.data

    def list_workflows(self, org_id: Optional[str] = None) -> Dict[str, Any]:
        response = self.client.get(
            f"/v1/orgs/{org_id or self.org_id}/workflows",
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        return response.data

    def set_user(self, access_token: str, org_id: Optional[str] = None):
        self.org_id = org_id
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {access_token}")

    def get_completed_tasks(self) -> Dict[str, Any]:
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(
                self.org_id,
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        return response.data

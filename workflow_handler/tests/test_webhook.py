import logging

from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import WorkflowHook
from user_handler.models import User, Organization


logger = logging.getLogger(__file__)


class TestOrganizations(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "fooword"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.add_admin(user)
        response = self.client.post(
            "/v1/users/token",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        self.admin_access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        self.workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {"options": ["foo1", "bar1"]},
                }
            ],
            "webhook": {"target": "http://some.url.com"},
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_admin_webhook_creation(self):
        self.assertIsNotNone(WorkflowHook.objects.get(user__email="foo@bar.com"))

    def test_webhook_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        new_url = "http://someother.url.com"
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, self.workflow_id),
            {"webhook": {"target": new_url}},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["webhook"]["target"], new_url)
        self.assertEqual(
            WorkflowHook.objects.get(workflow__pk=self.workflow_id).target, new_url
        )

    def test_webhook_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["webhook"]["target"], "http://some.url.com")

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
            "/v1/users/token/",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        self.admin_access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        workflow_data = {
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
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]
        user = User(name="worker", email="worker@bar.com")
        user.set_password(self.preset_user_password)
        user.save()
        organization.user.add(user)
        response = self.client.post(
            "/v1/users/token/",
            {"email": "worker@bar.com", "password": self.preset_user_password},
        )
        self.worker_access_token = response.data["access"]

    def test_admin_webhook_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIsNotNone(WorkflowHook.objects.get(user__email="foo@bar.com"))
        self.assertEqual(response.data["event"], "task.completed")

    def test_worker_webhook_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_multiple_admin_webhook_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, 400)
        self.assertEqual(
            WorkflowHook.objects.filter(workflow__id=self.workflow_id).count(), 1
        )

    def test_webhook_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        hook_id = response.data["id"]
        new_url = "http://someother.url.com"
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/webhooks/{2}".format(
                self.org_id, self.workflow_id, hook_id
            ),
            {"target": new_url},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["target"], new_url)
        self.assertEqual(WorkflowHook.objects.get(pk=hook_id).target, new_url)

    def test_webhook_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        hook_id = response.data["id"]
        response = self.client.delete(
            "/v1/orgs/{0}/workflows/{1}/webhooks/{2}".format(
                self.org_id, self.workflow_id, hook_id
            )
        )
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT, response.data
        )
        self.assertEqual(WorkflowHook.objects.filter(pk=hook_id).count(), 0)

    def test_webhook_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/webhooks/".format(
                self.org_id, self.workflow_id
            ),
            {"target": "http://some.url.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        hook_id = response.data["id"]
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/webhooks/{2}".format(
                self.org_id, self.workflow_id, hook_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["target"], "http://some.url.com")

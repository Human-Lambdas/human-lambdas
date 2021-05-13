from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import WebHook
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    WORKFLOW_DATA_3,
)


class TestZapierHook(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token")
        self.token = response.data["token"]

        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            WORKFLOW_DATA_3,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_zapier_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.get("/zapier/authentication")
        self.assertTrue("organization" in response.data)

    def test_subscribe_to_hook(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        hook_url = "https://some.url.se"
        response = self.client.post(
            "/zapier/hook",
            {
                "target": hook_url,
                "workflow_id": self.workflow_id,
            },
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        webhook = WebHook.objects.filter(pk=response.data["id"])
        self.assertTrue(webhook.exists())
        self.assertEqual(webhook.first().target, hook_url)
        self.assertTrue(webhook.first().is_zapier)

    def test_unsubscribe_to_hook(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        hook_url = "https://some.url.se"
        response = self.client.post(
            "/zapier/hook",
            {
                "target": hook_url,
                "workflow_id": self.workflow_id,
            },
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        hook_id = response.data["id"]
        webhook = WebHook.objects.filter(pk=hook_id)
        self.assertTrue(webhook.exists())

        response = self.client.delete(
            "/zapier/hook",
            {"hook_id": hook_id},
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT, response.data
        )
        webhook = WebHook.objects.filter(pk=hook_id)
        self.assertFalse(webhook.exists())

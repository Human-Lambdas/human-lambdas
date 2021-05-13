from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.tests.constants import REGISTRATION_DATA


class TestIntegromat(APITestCase):
    def setUp(self):

        response = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.user_id = response.data["id"]

        user = User.objects.get(pk=self.user_id)
        org = Organization.objects.get(user__email="foo@bar.com")
        org.add_admin(user)
        self.org_id = org.pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/users/api-token",
        )
        self.token = response.data["token"]

        workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "news",
                    "name": "news",
                    "type": "text",
                    "layout": {
                        "h": 4,
                        "i": "e8436384-205d-4d25-bf6a-a52f31cf79b5",
                        "w": 6,
                        "x": 6,
                        "y": 12,
                        "minH": 4,
                        "minW": 4,
                        "moved": False,
                        "static": False,
                    },
                    "text": {"read_only": True},
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {self.token}")

    def test_when_get_workflows_then_returned(self):
        response = self.client.get(f"/orgs/{self.org_id}/workflows")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertNotIn("disabled", response.data[0])

    def test_when_get_workflow_then_returned(self):
        response = self.client.get(f"/orgs/{self.org_id}/workflows/{self.workflow_id}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["id"], self.workflow_id)
        self.assertNotIn("layout", response.data["data"][0])
        self.assertNotIn("_id", response.data["data"][0])

    def test_when_get_webhook_then_fetched(self):
        response = self.client.get(
            f"/orgs/{self.org_id}/workflows/{self.workflow_id}/webhook"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {"target": ""})

    def test_when_patch_webhook_then_patched(self):
        target = "http://a.co"

        response = self.client.patch(
            f"/orgs/{self.org_id}/workflows/{self.workflow_id}/webhook",
            {"target": target},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        response = self.client.get(
            f"/orgs/{self.org_id}/workflows/{self.workflow_id}/webhook"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["target"], target)

        response = self.client.patch(
            f"/orgs/{self.org_id}/workflows/{self.workflow_id}/webhook",
            {"target": ""},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(response.data, None)

        response = self.client.get(
            f"/orgs/{self.org_id}/workflows/{self.workflow_id}/webhook"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {"target": ""})

import os

from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Task
from user_handler.models import Organization


_CURRENT_DIR = os.path.dirname(__file__)


class TestTaskList(APITestCase):
    def setUp(self):
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/v1/users/register/", registration_data)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/api-token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.token = response.data["token"]

        workflow_data = {
            "name": "uploader",
            "description": "great wf",
            "inputs": [
                {"id": "news", "name": "news", "type": "text"},
                {"id": "type", "name": "type", "type": "text"},
            ],
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
        data_file = os.path.join(_CURRENT_DIR, "data", "dataset.csv")
        with open(data_file, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload/".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        for task in Task.objects.all():
            task.status = "completed"
            task.save()

    def test_list_completed_task(self):

        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/completed/".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertTrue(len(response.data) > 100)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/completed/".format(self.org_id, self.workflow_id),
            format="json",
            data={"limit": 100},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data["results"]), 100, response.data)
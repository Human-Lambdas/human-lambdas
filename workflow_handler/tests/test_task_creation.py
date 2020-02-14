from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Task
from user_handler.models import Organization


class TestTaskCreation(APITestCase):
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
                {"id": "Alpha", "name": "alpha", "type": "text"},
                {"id": "Beta", "name": "beta", "type": "text"},
                {"id": "Gamma", "name": "gamma", "type": "text"},
            ],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_create_task(self):
        task_data = {
            "inputs": [
                {"id": "Alpha", "value": "data1"},
                {"id": "Beta", "value": "data2"},
                {"id": "Gamma", "value": "data3"},
            ]
        }
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/v1/orgs/{}/workflows/{}/tasks/create/".format(
                self.org_id, self.workflow_id
            ),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)

import copy
import os

from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import Organization
from workflow_handler.models import Task
from workflow_handler.tests import DATA_PATH


class TestTaskList(APITestCase):
    def setUp(self):
        registration_data = {
            "email": "foo@bar.com",
            "password": "foowordbar",
            "organization": "fooInc",
            "name": "foo",
        }
        response = self.client.post("/v1/users/register", registration_data)
        self.user_id = response.data["id"]
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token",)
        self.token = response.data["token"]

        workflow_data = {
            "name": "uploader",
            "description": "great wf",
            "data": [
                {
                    "id": "news",
                    "name": "news",
                    "type": "text",
                    "layout": {},
                    "text": {"read_only": True},
                },
                {
                    "id": "type",
                    "name": "type",
                    "type": "text",
                    "layout": {},
                    "text": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]
        data_file = os.path.join(DATA_PATH, "dataset.csv")
        with open(data_file, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.completed_tasks = 150
        for task in Task.objects.all()[: self.completed_tasks]:
            _ = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data={"assigned_to": self.user_id},
                format="json",
            )

            data = copy.deepcopy(task.data)
            for idata in data:
                if idata["id"] == "foo":
                    idata["single_selection"]["value"] = "bar1"
            response_data = {"data": data}
            _ = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.pk
                ),
                data=response_data,
                format="json",
            )

    def test_flushing(self):
        n_tasks = Task.objects.count()
        self.assertGreater(n_tasks, self.completed_tasks)

        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.put(
            "/orgs/{}/workflows/{}/flush".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(Task.objects.count(), self.completed_tasks)

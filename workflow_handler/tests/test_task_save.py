import copy
import logging
import os

from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import Organization
from workflow_handler.models import Task, Workflow

logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTasksSave(APITestCase):
    def setUserClient(self, email):
        response = self.client.post(
            "/v1/users/token", {"email": email, "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
        registration_data = {
            "email": "foo@bar.com",
            "password": "foowordbar",
            "organization": "fooInc",
            "name": "foo",
        }
        response = self.client.post("/v1/users/register", registration_data)
        self.user_id = response.data["id"]

        registration_data["email"] = "foojr@bar.com"
        _ = self.client.post("/v1/users/register", registration_data)
        # registration_data["email"] = "foo@bar.com"

        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "Alpha",
                    "name": "alpha",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Beta",
                    "name": "beta",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Gamma",
                    "name": "gamma",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_save_single_selection_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = ["foo1", "bar1"]
        for output_value, task in zip(output_values, tasks):

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
                    idata["single_selection"]["value"] = output_value
            data_payload = {"data": data}

            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/save".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data=data_payload,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("in_progress", response.data["status"])
            self.assertEqual(data, response.data["data"])
            self.assertEqual("in_progress", Task.objects.get(id=task.id).status)
            self.assertIsNone(Task.objects.get(id=task.id).completed_at)

            # test retrieving the same task
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual("in_progress", response.data["status"])
            self.assertEqual(data, response.data["data"])

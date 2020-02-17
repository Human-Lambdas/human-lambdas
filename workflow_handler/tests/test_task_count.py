import logging
import os

from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow, Task
from user_handler.models import Organization


logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTaskCount(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
        self.total_rows = 3
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
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload/".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_total_count(self):
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, self.total_rows)

    def test_assigning_task(self):
        n_tasks = self.total_rows
        for i in range(self.total_rows):
            _ = self.client.get(
                "/v1/orgs/{}/workflows/{}/tasks/next/".format(
                    self.org_id, self.workflow_id
                )
            )
            workflow = Workflow.objects.get(pk=self.workflow_id)
            n_tasks -= 1
            self.assertEqual(workflow.n_tasks, n_tasks)

    def test_task_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        n_tasks = self.total_rows
        task_data = {
            "inputs": [
                {"id": "Alpha", "value": "data1"},
                {"id": "Beta", "value": "data2"},
                {"id": "Gamma", "value": "data3"},
            ]
        }
        for i in range(5):
            _ = self.client.post(
                "/v1/orgs/{}/workflows/{}/tasks/create/".format(
                    self.org_id, self.workflow_id
                ),
                task_data,
                format="json",
            )
            n_tasks += 1
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)

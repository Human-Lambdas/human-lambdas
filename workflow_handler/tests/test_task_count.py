import logging
import os

from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow
from user_handler.models import Organization

from . import DATA_PATH


logger = logging.getLogger(__file__)


class TestTaskCount(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(DATA_PATH, "test.csv")
        self.total_rows = 3
        registration_data = {
            "email": "foo@bar.com",
            "password": "foowordbar",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/v1/users/register", registration_data)
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
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_total_count(self):
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, self.total_rows)

    def test_assigning_task(self):
        n_tasks = self.total_rows - 1
        for i in range(self.total_rows):
            _ = self.client.get(
                "/v1/orgs/{}/workflows/{}/tasks/next".format(
                    self.org_id, self.workflow_id
                )
            )
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)

    def test_task_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        n_tasks = self.total_rows
        task_data = {
            "inputs": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"},
        }
        for i in range(5):
            _ = self.client.post(
                "/orgs/{}/workflows/{}/tasks/create".format(
                    self.org_id, self.workflow_id
                ),
                task_data,
                format="json",
            )
            n_tasks += 1
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)

    def test_unassigning_task(self):
        n_tasks = self.total_rows - 1
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/next".format(self.org_id, self.workflow_id)
        )
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        _ = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/{}/unassign".format(
                self.org_id, self.workflow_id, response.data["id"]
            )
        )
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks + 1)

    def test_active_users(self):
        n_tasks = self.total_rows - 1
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/next".format(self.org_id, self.workflow_id)
        )
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        self.assertEqual(response.data[0]["active_users"], ["foo"])

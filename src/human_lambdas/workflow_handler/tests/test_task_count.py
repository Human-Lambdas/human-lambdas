import copy
import logging
import os

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    WORKFLOW_DATA_3,
)

from . import DATA_PATH

logger = logging.getLogger(__name__)


class TestTaskCount(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(DATA_PATH, "test.csv")
        self.total_rows = 3

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/users/api-token",
        )
        self.token = response.data["token"]

        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            WORKFLOW_DATA_3,
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
        n_tasks = self.total_rows
        for i in range(self.total_rows):
            response = self.client.get(
                "/v1/orgs/{}/workflows/{}/tasks/next".format(
                    self.org_id, self.workflow_id
                )
            )
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)
            for idata in response.data["data"]:
                if idata["id"] == "foo":
                    idata[idata["type"]]["value"] = "bajs"
            data = {"data": response.data["data"]}
            _ = self.client.patch(
                "/v1/orgs/{}/workflows/{}/tasks/{}".format(
                    self.org_id, self.workflow_id, response.data["id"]
                ),
                data=data,
                format="json",
            )
            n_tasks -= 1
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)

    def test_task_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        n_tasks = self.total_rows
        task_data = {
            "data": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"},
        }
        for i in range(5):
            response = self.client.post(
                "/orgs/{}/workflows/{}/tasks/create".format(
                    self.org_id, self.workflow_id
                ),
                task_data,
                format="json",
            )
            n_tasks += 1
            workflow = Workflow.objects.get(pk=self.workflow_id)
            self.assertEqual(workflow.n_tasks, n_tasks)

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/{}".format(
                self.org_id, self.workflow_id, response.data["id"]
            )
        )

        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        data = copy.deepcopy(response.data["data"])
        for idata in data:
            if idata["id"] == "foo":
                idata["single_selection"]["value"] = "bar2"
        response_data = {"data": data}
        _ = self.client.patch(
            "/v1/orgs/{}/workflows/{}/tasks/{}".format(
                self.org_id, self.workflow_id, response.data["id"]
            ),
            data=response_data,
            format="json",
        )
        n_tasks -= 1
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)

    def test_unassigning_task(self):
        n_tasks = self.total_rows
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/next".format(self.org_id, self.workflow_id)
        )
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        _ = self.client.post(
            "/v1/orgs/{}/workflows/{}/tasks/{}/assign".format(
                self.org_id,
                self.workflow_id,
                response.data["id"],
            ),
            data={"assigned_to": None},
            format="json",
        )
        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        task = Task.objects.get(pk=response.data["id"])
        self.assertEqual(task.status, "open")
        self.assertEqual(task.assigned_at, None)

    def test_active_users(self):
        n_tasks = self.total_rows
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/next".format(self.org_id, self.workflow_id)
        )

        workflow = Workflow.objects.get(pk=self.workflow_id)
        self.assertEqual(workflow.n_tasks, n_tasks)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        self.assertEqual(response.data[0]["active_users"], ["foo"])

import logging
import os

from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow, Task


logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTasks(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/v1/users/register/", registration_data)
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
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
        _ = self.client.post("/v1/workflows/create/", workflow_data, format="json")
        second_workflow_data = {
            "name": "second workflow",
            "description": "great second wf",
            "inputs": [
                {"id": "Alpha", "name": "alpha", "type": "text"},
                {"id": "Beta", "name": "beta", "type": "text"},
                {"id": "Gamma", "name": "gamma", "type": "text"},
            ],
            "outputs": [
                {
                    "id": "bar",
                    "name": "bar",
                    "type": "multiple-selection",
                    "multiple-selection": {
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                }
            ],
        }
        _ = self.client.post(
            "/v1/workflows/create/", second_workflow_data, format="json"
        )
        self.workflow_id = Workflow.objects.get(name="uploader").id
        self.second_workflow_id = Workflow.objects.get(name="second workflow").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/workflows/{}/upload/".format(self.workflow_id), data=data
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/workflows/{}/upload/".format(self.second_workflow_id), data=data
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_get_task_list(self):
        response = self.client.get("/v1/workflows/{}/tasks/".format(self.workflow_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(3, len(response.data), response.content)

    def test_retrieve_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/workflows/{}/tasks/{}".format(self.workflow_id, task.id)
            )
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("pending", response.data["status"])
            self.assertTrue(len(response.data["inputs"]))

    def test_retrieve_task_output(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/workflows/{}/tasks/{}".format(self.workflow_id, task.id)
            )
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("pending", response.data["status"])
            self.assertEqual(workflow.outputs, response.data["outputs"])

    def test_complete_single_selection_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = ["foo1", "bar1"]
        expected_outputs = workflow.outputs
        for output_value, task in zip(output_values, tasks):
            exp_output = next(item for item in expected_outputs if item["id"] == "foo")
            exp_output[exp_output["type"]]["value"] = output_value
            output_list = [{"id": "foo", "single-selection": {"value": output_value}}]
            data = {"outputs": output_list}
            response = self.client.patch(
                "/v1/workflows/{}/tasks/{}".format(self.workflow_id, task.id),
                data=data,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("completed", response.data["status"])
            self.assertEqual(expected_outputs, response.data["outputs"])
            self.assertEqual("completed", Task.objects.get(id=task.id).status)

    def test_complete_multiple_selection_task(self):
        workflow = Workflow.objects.get(id=self.second_workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = [["foo1"], ["foo1", "bar1"]]
        expected_outputs = workflow.outputs
        for output_value, task in zip(output_values, tasks):
            exp_output = next(item for item in expected_outputs if item["id"] == "bar")
            exp_output[exp_output["type"]]["value"] = output_value
            output_list = [{"id": "bar", "multiple-selection": {"value": output_value}}]
            data = {"outputs": output_list}
            response = self.client.patch(
                "/v1/workflows/{}/tasks/{}".format(self.second_workflow_id, task.id),
                data=data,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("completed", response.data["status"])
            self.assertEqual(expected_outputs, response.data["outputs"])
            self.assertEqual("completed", Task.objects.get(id=task.id).status)

    def test_update_task(self):
        task = Task.objects.first()
        data = {"status": "testing"}
        response = self.client.patch(
            "/v1/workflows/{}/tasks/{}".format(self.workflow_id, task.id),
            data=data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.content
        )

    def test_next_task(self):
        response = self.client.get(
            "/v1/workflows/{}/tasks/next/".format(self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual("pending", response.data["status"], response.content)
        task = Task.objects.get(id=response.data["id"])
        self.assertEqual(task.status, "assigned")

    def test_next_task_different_workflow(self):
        response = self.client.get(
            "/v1/workflows/{}/tasks/next/".format(self.second_workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_next_task_without_slash(self):
        response = self.client.get(
            "/v1/workflows/{}/tasks/next".format(self.workflow_id)
        )
        self.assertEqual(
            response.status_code, status.HTTP_301_MOVED_PERMANENTLY, response.content
        )
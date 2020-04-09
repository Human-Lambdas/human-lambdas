import logging
import os

from django.utils import timezone
from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow, Task
from user_handler.models import Organization, User


logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTasks(APITestCase):
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
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/v1/users/register", registration_data)

        registration_data["email"] = "foojr@bar.com"
        _ = self.client.post("/v1/users/register", registration_data)
        registration_data["email"] = "foo@bar.com"

        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
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
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
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
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            second_workflow_data,
            format="json",
        )
        self.workflow_id = Workflow.objects.get(name="uploader").id
        self.second_workflow_id = Workflow.objects.get(name="second workflow").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.second_workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_get_task_list(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(3, len(response.data), response.content)

    def test_retrieve_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("pending", response.data["status"])
            self.assertTrue(len(response.data["inputs"]))

    def test_retrieve_task_output(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
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
            output_list = [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {
                        "value": output_value,
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                }
            ]
            data = {"inputs": task.inputs, "outputs": output_list}
            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                ),
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
            output_list = [
                {
                    "id": "bar",
                    "name": "bar",
                    "type": "multiple-selection",
                    "multiple-selection": {
                        "value": output_value,
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                }
            ]
            data = {"inputs": task.inputs, "outputs": output_list}
            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.second_workflow_id, task.id
                ),
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
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task.id
            ),
            data=data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.content
        )

    def test_next_task(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual("assigned", response.data["status"], response.content)
        task = Task.objects.get(id=response.data["id"])
        self.assertEqual(task.status, "assigned")

    def test_next_task_repeatedly(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual("assigned", response.data["status"], response.content)

        task_id = response.data["id"]
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["id"], task_id)

        # get next task by client 2 should be different because task_id assigned_at has not expired
        self.setUserClient("foojr@bar.com")
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertNotEqual(response.data["id"], task_id)

        # unassign from client 2
        task = Task.objects.get(pk=response.data["id"])
        task.status = "pending"
        task.save()

        task = Task.objects.get(pk=task_id)
        task.assigned_at = timezone.now() - timezone.timedelta(hours=24)
        task.save()

        # get next task by client 2 should be task_id because assigned_at has expired
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["id"], task_id)

        task = Task.objects.get(pk=task_id)
        user = User.objects.get(email="foo@bar.com")
        self.assertEqual(task.status, "assigned")
        self.assertNotEqual(task.assigned_to, user)
        self.assertIsNotNone(task.assigned_at)
        self.setUserClient("foo@bar.com")

    def test_next_task_different_workflow(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.second_workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_next_task_with_slash(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next/".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(
            response.status_code, status.HTTP_404_NOT_FOUND, response.content
        )

    def test_workflow_list_task_count(self):
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        for data, expected in zip(response.data, [3, 3]):
            self.assertEqual(data["n_tasks"], expected)

    def test_workflow_retrieve_task_count(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.data["n_tasks"], 3)

    def test_change_outputs_retrieve_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        workflow.outputs[0]["name"] = "new_name"
        workflow.save()
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual(response.data["outputs"][0]["name"], "new_name")

    def test_next_task_change_outputs(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        workflow.outputs[0]["name"] = "new_name"
        workflow.save()
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["outputs"][0]["name"], "new_name")

    def test_next_task_change_inputs(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        workflow.inputs[0]["name"] = "new_name"
        workflow.save()
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["inputs"][0]["name"], "new_name")

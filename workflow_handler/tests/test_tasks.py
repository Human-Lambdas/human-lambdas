import logging
import os
import copy

from django.utils import timezone
from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow, Task
from user_handler.models import Organization, User, Notification


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
            "name": "foo",
        }
        response = self.client.post("/v1/users/register", registration_data)
        self.user_id = response.data["id"]
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk

        # create user and add in same org
        org = Organization.objects.get(pk=self.org_id)
        notification = Notification()
        notification.save()
        user = User(name="foo", email="foojr@bar.com", notifications=notification)
        user.set_password("foowordbar")
        user.save()
        org.add_admin(user)

        # registration_data["email"] =
        # _ = self.client.post("/v1/users/register", registration_data)

        # registration_data["email"] = "foo@bar.com"

        # self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "uploader",
            "description": "great wf",
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
        second_workflow_data = {
            "name": "second workflow",
            "description": "great second wf",
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
                    "id": "bar",
                    "name": "bar",
                    "type": "multiple_selection",
                    "multiple_selection": {
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
            self.assertEqual("in_progress", response.data["status"])
            self.assertTrue(len(response.data["data"]))
            for itask in response.data["data"]:
                if itask[itask["type"]].get("read_only"):
                    self.assertTrue("value" in itask[itask["type"]])

    def test_complete_single_selection_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = ["foo1", "bar1"]
        for output_value, task in zip(output_values, tasks):
            data = copy.deepcopy(task.data)

            _ = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data={"assigned_to": self.user_id},
                format="json",
            )

            for idata in data:
                if idata["id"] == "foo":
                    idata["single_selection"]["value"] = output_value
            data_payload = {"data": data, "assigned_to": self.user_id}

            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data=data_payload,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("completed", response.data["status"])
            self.assertEqual(data, response.data["data"])
            self.assertEqual("completed", Task.objects.get(id=task.id).status)

            # test retrieving the same task
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual("completed", response.data["status"])
            self.assertEqual(data, response.data["data"])

    def test_complete_multiple_selection_task(self):
        workflow = Workflow.objects.get(id=self.second_workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = [["foo1"], ["foo1", "bar1"]]
        for output_value, task in zip(output_values, tasks):
            data = copy.deepcopy(task.data)

            _ = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                    self.org_id, self.second_workflow_id, task.id
                ),
                data={"assigned_to": self.user_id},
                format="json",
            )

            for idata in data:
                if idata["id"] == "bar":
                    idata["multiple_selection"]["value"] = output_value
            data_reponse = {"data": data}  # , "assigned_to": self.user_id}
            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.second_workflow_id, task.id
                ),
                data=data_reponse,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("completed", response.data["status"])
            self.assertEqual(data, response.data["data"])
            self.assertEqual("completed", Task.objects.get(id=task.id).status)

    def test_next_task(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual("in_progress", response.data["status"], response.content)
        task = Task.objects.get(id=response.data["id"])
        self.assertEqual(task.status, "in_progress")

    def test_next_task_repeatedly(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual("in_progress", response.data["status"], response.content)

        task_id = response.data["id"]
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["id"], task_id)

        # get next task by client 2 should be different
        self.setUserClient("foojr@bar.com")
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertNotEqual(response.data["id"], task_id)

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
        workflow.data[0]["name"] = "new_name"
        workflow.save()
        tasks = Task.objects.filter(workflow=workflow).all()
        for task in tasks:
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual(response.data["data"][0]["name"], "new_name")

    def test_next_task_change_data(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        workflow.data[0]["name"] = "new_name"
        workflow.save()
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(response.data["data"][0]["name"], "new_name")

    def test_get_pending_tasks(self):
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/pending".format(
                self.org_id, self.workflow_id,
            )
        )
        self.assertEqual(response.data["count"], 3)
        self.assertEqual(response.data["next"], None)
        for idata in response.data["tasks"]:
            self.assertEqual(idata["status"], "new")

        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            )
        )
        task_id = response.data["id"]
        task_data = response.data["data"]

        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/pending".format(
                self.org_id, self.workflow_id,
            )
        )
        self.assertEqual(response.data["count"], 3)
        self.assertEqual(
            len(
                [
                    idata
                    for idata in response.data["tasks"]
                    if idata["status"] == "in_progress"
                ]
            ),
            1,
        )
        for t_data in task_data:
            if t_data["id"] == "foo":
                t_data[t_data["type"]]["value"] = "foo2"
        data = {"data": task_data}
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task_id
            ),
            data=data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/pending".format(
                self.org_id, self.workflow_id,
            )
        )
        self.assertEqual(response.data["count"], 2)
        self.assertEqual(response.data["tasks"][0]["n_comments"], 0)

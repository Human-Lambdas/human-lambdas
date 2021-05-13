import copy
import logging
import os

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, TaskActivity, Workflow
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    REGISTRATION_DATA_2,
    WORKFLOW_DATA_3,
)

logger = logging.getLogger(__name__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTasksActivity(APITestCase):
    def setUserClient(self, email):
        response = self.client.post(
            "/v1/users/token", {"email": email, "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")

        response = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.user_id = response.data["id"]

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA_2)

        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            WORKFLOW_DATA_3,
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

    def test_write_comment(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        task = Task.objects.filter(workflow=workflow).all()[0]
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity".format(
                self.org_id,
                self.workflow_id,
                task.pk,
            ),
            data={"action": "comment", "comment": "hello world"},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["comment"], "hello world")

    def test_get_activity_list(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        task = Task.objects.filter(workflow=workflow).all()[0]
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity".format(
                self.org_id,
                self.workflow_id,
                task.pk,
            ),
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["action"], "created")
        self.assertEqual(response.data[0]["filename"], "test.csv")
        self.assertEqual(response.data[0]["source"], "csv")

    def test_delete_comment(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        task = Task.objects.filter(workflow=workflow).all()[0]
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity".format(
                self.org_id,
                self.workflow_id,
                task.pk,
            ),
            data={"action": "comment", "comment": "hello world"},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["comment"], "hello world")

        activity_id = response.data["id"]
        self.assertTrue(TaskActivity.objects.filter(pk=activity_id).exists())

        response = self.client.delete(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity/{3}".format(
                self.org_id, self.workflow_id, task.pk, activity_id
            ),
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(TaskActivity.objects.filter(pk=activity_id).exists())

    def test_complete_task_acticity(self):
        task = Task.objects.first()
        data = copy.deepcopy(task.data)
        for idata in data:
            if idata["id"] == "foo":
                idata["single_selection"]["value"] = "bar2"
        response_data = {"data": data}
        _ = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                self.org_id, self.workflow_id, task.id
            ),
            data={"assigned_to": self.user_id},
            format="json",
        )
        _ = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task.pk
            ),
            data=response_data,
            format="json",
        )
        self.assertTrue(
            TaskActivity.objects.filter(task=task, action="completed").exists()
        )

    def test_save_task_activity(self):
        task = Task.objects.first()
        data = copy.deepcopy(task.data)
        for idata in data:
            if idata["id"] == "foo":
                idata["single_selection"]["value"] = "bar2"
        response_data = {"data": data}
        _ = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                self.org_id, self.workflow_id, task.id
            ),
            data={"assigned_to": self.user_id},
            format="json",
        )
        _ = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/save".format(
                self.org_id, self.workflow_id, task.pk
            ),
            data=response_data,
            format="json",
        )
        self.assertTrue(TaskActivity.objects.filter(task=task, action="saved").exists())

    def test_assign_task_activity(self):
        task = Task.objects.first()
        _ = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                self.org_id, self.workflow_id, task.id
            ),
            data={"assigned_to": self.user_id},
            format="json",
        )
        self.assertTrue(
            TaskActivity.objects.filter(task=task, action="assigned").exists()
        )
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity".format(
                self.org_id,
                self.workflow_id,
                task.pk,
            ),
        )
        self.assertEqual(response.data[0]["assignee_name"], "foo")
        self.assertEqual(response.data[0]["created_by_name"], "foo")

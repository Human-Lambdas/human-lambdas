import os

from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task

_CURRENT_DIR = os.path.dirname(__file__)

from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    WORKFLOW_DATA_2,
)


class TestInternalTaskList(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            WORKFLOW_DATA_2,
            format="json",
        )
        self.workflow_id = response.data["id"]
        data_file = os.path.join(_CURRENT_DIR, "data", "dataset.csv")
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
        t_delta = timezone.timedelta(0)
        for task in Task.objects.all()[: self.completed_tasks]:
            task.status = "completed"
            task.completed_at = timezone.now() + t_delta
            t_delta -= timezone.timedelta(minutes=10)
            task.save()

    def test_list_completed_task(self):
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(self.org_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data["tasks"]), 100, response.data)
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(self.org_id),
            format="json",
            data={"limit": 50},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data["tasks"]), 50, response.data)
        self.assertEqual(response.data["count"], self.completed_tasks, response.data)
        assert response.data["tasks"][0]["data"] is None
        self.assertGreater(
            response.data["tasks"][0]["completed_at"],
            response.data["tasks"][1]["completed_at"],
        )
        self.assertIn("completed_by_email", response.data["tasks"][0])

    def test_non_existing_workflow(self):
        response = self.client.get("/v1/orgs/10000/tasks/completed")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

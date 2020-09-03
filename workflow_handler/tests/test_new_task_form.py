import os

from rest_framework.test import APITestCase
from rest_framework import status
from django.utils import timezone

from workflow_handler.models import Task
from user_handler.models import Organization


_CURRENT_DIR = os.path.dirname(__file__)


class TestTaskForm(APITestCase):
    def setUp(self):
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
        self.workflow_data = {
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
            self.workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_get_task_form(self):
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/tasks/form".format(self.org_id, self.workflow_id)
        )
        read_only_data = [
            i for i in self.workflow_data["data"] if i[i["type"]].get("read_only")
        ]
        for idata in read_only_data:
            del idata["layout"]
        self.assertEqual(response.data["data"], read_only_data)

    def test_create_task_form(self):
        read_only_data = [
            i for i in self.workflow_data["data"] if i[i["type"]].get("read_only")
        ]
        for idata in read_only_data:
            del idata["layout"]
            idata[idata["type"]]["value"] = "bajs"
        payload = {"data": read_only_data}
        response = self.client.post(
            "/v1/orgs/{}/workflows/{}/tasks/form".format(self.org_id, self.workflow_id),
            data=payload,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.filter(pk=response.data["id"])
        self.assertTrue(task.exists())
        self.assertEqual(len(task.first().data), len(self.workflow_data))

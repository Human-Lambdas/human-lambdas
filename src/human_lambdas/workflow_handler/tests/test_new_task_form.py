from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task
from human_lambdas.workflow_handler.tests.constants import REGISTRATION_DATA


class TestTaskForm(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        self.workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "news",
                    "name": "news",
                    "type": "text",
                    "layout": {},
                    "text": {"read_only": True, "value": None},
                },
                {
                    "id": "type",
                    "name": "type",
                    "type": "text",
                    "layout": {},
                    "text": {"read_only": True, "value": None},
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
        expected_data = []
        for idata in self.workflow_data["data"]:
            if idata[idata["type"]].get("read_only"):
                if "layout" in idata:
                    del idata["layout"]
                expected_data.append(idata)

        self.assertEqual(response.data["data"], expected_data)

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
        self.assertEqual(len(task.first().data), len(self.workflow_data["data"]))

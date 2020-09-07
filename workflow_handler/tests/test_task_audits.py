import os

from rest_framework.test import APITestCase
from rest_framework import status
from workflow_handler.models import Task, Source
from user_handler.models import Organization


_CURRENT_DIR = os.path.dirname(__file__)


class TestTaskAudit(APITestCase):
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
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token")
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

        workflow_data["name"] = "another workflow"
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        task_data = {"inputs": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        for task in Task.objects.all():
            response_data = {"inputs": task.inputs, "outputs": task.outputs}
            response_data["outputs"][0]["single-selection"]["value"] = "bar2"
            _ = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.pk
                ),
                data=response_data,
                format="json",
            )

    def test_get_completed_task_list(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(self.org_id,)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        for itask in response.data["tasks"]:
            self.assertEqual(itask["status"], "completed", itask)

    def test_get_source_list(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/sources".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        for idata in response.data:
            self.assertIn(idata["name"], ["API", "test.csv"])

    def test_source_filter(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/sources".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        API_id = [idata for idata in response.data if idata["name"] == "API"][0]["id"]
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(self.org_id),
            data={"source_id": API_id},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data["tasks"]), 1)

    def test_workflow_list_filter(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows".format(self.org_id),
            data={"task_status": "completed"},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["id"], self.workflow_id)

    def test_get_audit_task(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        task = Task.objects.filter(
            workflow__pk=self.workflow_id, source__name="test.csv"
        ).first()
        source_id = Source.objects.get(name="test.csv").pk
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/{}/audit".format(self.org_id, task.id),
            data={"workflow_id": self.workflow_id, "source_id": source_id},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["result"]["id"], task.id)
        prev_task = Task.objects.filter(source__pk=source_id, workflow__pk=self.workflow_id, completed_at__lte=task.completed_at).order_by("-completed_at").first()
        next_task = Task.objects.filter(source__pk=source_id, workflow__pk=self.workflow_id,
                                        completed_at__gte=task.completed_at).order_by("-completed_at").first()
        if next_task:
            self.assertEqual(response.data["next"], f"/orgs/125/workflows/tasks/{next_task.pk}/audit?workflow_id=80&source_id=41")
        else:
            self.assertEqual(response.data["next"],None)
        if prev_task:
            self.assertEqual(response.data["next"],
                             f"/orgs/125/workflows/tasks/{prev_task.pk}/audit?workflow_id=80&source_id=41")
        else:
            self.assertEqual(response.data["prev"], None)
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/{}/audit?workflow_id={}&source_id=".format(self.org_id, task.id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

class TestEmptyTaskAudit(APITestCase):
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
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token")
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

        workflow_data["name"] = "another workflow"
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        task_data = {"inputs": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_get_empty_completed_task_list(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(self.org_id,)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["tasks"], [], response.data)

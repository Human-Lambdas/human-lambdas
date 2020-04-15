import os

from django.utils import timezone
from rest_framework.test import APITestCase
from rest_framework import status
from user_handler.models import Organization, User
from workflow_handler.models import Task, Workflow
from workflow_handler.tests import DATA_PATH


class TestMetrics(APITestCase):
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

    def test_pending_stats(self):
        for irange in ["daily", "weekly", "monthly"]:
            data = {
                "range": irange,
                "type": ["pending"],
            }
            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertTrue(all(["pending" in idata for idata in response.data]))
            self.assertEqual(response.data[0]["pending"], 3)
            for data in response.data[1:]:
                self.assertEqual(data["pending"], 0)

    def test_pending_completed_stats(self):
        data = {
            "range": "daily",
            "type": ["pending", "completed"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(all(["pending" in idata for idata in response.data]))
        self.assertTrue(all(["completed" in idata for idata in response.data]))
        for data in response.data:
            self.assertEqual(data["completed"], 0)


class TestComplexMetrics(APITestCase):
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

    def test_complex_metrics(self):
        assigned_at = timezone.now() - timezone.timedelta(days=7)
        completed_at = timezone.now() - timezone.timedelta(minutes=1)
        created_at = assigned_at - timezone.timedelta(days=1)
        task = Task.objects.first()
        task.status = "completed"
        task.assigned_at = assigned_at
        task.completed_by = User.objects.get(email="foo@bar.com")
        task.completed_at = completed_at
        task.created_at = created_at
        task.save()

        data = {
            "range": "weekly",
            "type": ["completed", "aht", "tat"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(all(["aht" in idata for idata in response.data]))
        self.assertTrue(all(["tat" in idata for idata in response.data]))
        self.assertTrue(all(["completed" in idata for idata in response.data]))
        self.assertEqual(response.data[0]["completed"], 1)
        self.assertEqual(response.data[0]["aht"], completed_at - assigned_at)
        self.assertEqual(response.data[0]["tat"], completed_at - created_at)
        for idata in response.data[1:]:
            self.assertEqual(idata["aht"], 0)
            self.assertEqual(idata["tat"], 0)


class TestWorkflowMetrics(APITestCase):
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

        workflow_data = {
            "name": "uploader2",
            "description": "greater wf",
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
        self.workflow_id2 = response.data["id"]
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id2
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_workflow_names(self):
        data = {
            "range": "monthly",
            "type": ["pending"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 12 + 1)

    def test_wrong_type(self):
        data = {
            "range": "monthly",
            "type": ["banana"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

    def test_only_non_disabled_workflows(self):
        workflow = Workflow.objects.get(pk=self.workflow_id2)
        workflow.disabled = True
        workflow.save()

        data = {
            "range": "monthly",
            "type": ["pending"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id), data, format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["pending"], 3)

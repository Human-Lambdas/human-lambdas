import os
from unittest.mock import patch

from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.tests import DATA_PATH
from human_lambdas.workflow_handler.tests.constants import (
    ALPHA,
    BETA,
    GAMMA,
    REGISTRATION_DATA,
    WORKFLOW_DATA_3,
)


class TestMetrics(APITestCase):
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

    def test_pending_stats(self):
        for irange in ["daily", "weekly", "monthly"]:
            data = {
                "range": irange,
                "type": ["pending"],
            }
            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertTrue(all(["pending" in idata for idata in response.data]))
            self.assertEqual(response.data[-1]["pending"], 3)
            for data in response.data[:-1]:
                self.assertEqual(data["pending"], 0)

    def test_pending_completed_stats(self):
        data = {
            "range": "daily",
            "type": ["pending", "completed"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id),
            data,
            format="json",
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

    def test_complex_metrics(self):
        assigned_at = timezone.now() - timezone.timedelta(days=7)
        completed_at = timezone.now() - timezone.timedelta(minutes=1)
        created_at = assigned_at - timezone.timedelta(days=1)
        task = Task.objects.first()
        task.status = "completed"
        task.assigned_at = assigned_at
        task.assigned_to = User.objects.get(email="foo@bar.com")
        task.completed_at = completed_at
        task.created_at = created_at
        handling_time_seconds = int(
            (completed_at - assigned_at) / timezone.timedelta(seconds=1)
        )
        task.handling_time_seconds = handling_time_seconds
        task.save()

        data = {
            "range": "weekly",
            "type": ["completed", "aht", "tat"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id),
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(all(["aht" in idata for idata in response.data]))
        self.assertTrue(all(["tat" in idata for idata in response.data]))
        self.assertTrue(all(["completed" in idata for idata in response.data]))
        self.assertEqual(response.data[-1]["completed"], 1)
        self.assertEqual(response.data[-1]["aht"], handling_time_seconds)
        self.assertEqual(
            response.data[-1]["tat"],
            (completed_at - created_at) / timezone.timedelta(seconds=1),
        )
        for idata in response.data[:-1]:
            self.assertEqual(idata["aht"], None)
            self.assertEqual(idata["tat"], None)


class TestQueryMetrics(APITestCase):
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

        workflow_data = {
            "name": "uploader2",
            "data": [
                ALPHA,
                BETA,
                GAMMA,
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

        wf1 = Workflow.objects.get(pk=self.workflow_id)
        self.task = Task.objects.filter(workflow=wf1).first()
        self.task.status = "completed"

        assigned_at = timezone.now() - timezone.timedelta(days=7)
        created_at = assigned_at - timezone.timedelta(days=1)
        self.task.assigned_at = assigned_at
        self.task.assigned_to = User.objects.get(email="foo@bar.com")
        self.task.created_at = created_at
        self.task.save()

    def test_workflow_names(self):
        data = {
            "range": "monthly",
            "type": ["pending"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 12 + 1)

    def test_wrong_type(self):
        data = {
            "range": "monthly",
            "type": ["banana"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics".format(self.org_id),
            data,
            format="json",
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
            "/v1/orgs/{}/metrics".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[-1]["pending"], 3)

    def test_when_resumed_task_submits_then_ht_is_sum_of_sessions(self):
        # Arrange
        data = {
            "range": "monthly",
            "type": ["aht"],
        }

        first_ht = 2
        downtime = 8
        second_ht = 6
        total_ht = first_ht + second_ht
        start_time = timezone.now()

        def start_session():
            response = self.client.get(
                f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}/activity"
            )
            assert response.status_code == 200

        def save_task():
            data_payload = {"data": self.task.data}

            response = self.client.patch(
                f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}/save?force=True",
                data=data_payload,
                format="json",
            )
            assert response.status_code == 200

        def submit_task():
            response = self.client.patch(
                f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}?force=True",
                data={},
                format="json",
            )
            assert response.status_code == 200

        with patch("django.utils.timezone.now") as now:
            # Act
            now.return_value = start_time
            start_session()

            now.return_value += timezone.timedelta(seconds=first_ht)
            save_task()

            now.return_value += timezone.timedelta(seconds=downtime)
            start_session()

            now.return_value += timezone.timedelta(seconds=second_ht)

            submit_task()

            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            # Assert
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data[-1]["aht"], total_ht)


class TestWorkflowMetrics(APITestCase):
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

        workflow_data = {
            "name": "uploader2",
            "data": [
                ALPHA,
                BETA,
                GAMMA,
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

    def test_workflow_pending(self):
        wf_names = [
            Workflow.objects.get(pk=self.workflow_id).name,
            Workflow.objects.get(pk=self.workflow_id2).name,
        ]
        data = {
            "range": "monthly",
            "type": "pending",
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workflows".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["pending"]), 12 + 1)
        for idata in response.data["pending"]:
            for wf_name in wf_names:
                self.assertIn(wf_name, idata)

    def test_workflow_complex(self):
        wf1 = Workflow.objects.get(pk=self.workflow_id)
        wf2 = Workflow.objects.get(pk=self.workflow_id2)
        wf1_name = wf1.name
        wf2_name = wf2.name
        assigned_at = timezone.now() - timezone.timedelta(days=7)
        completed_at = timezone.now() - timezone.timedelta(minutes=1)
        handling_time_seconds = int(
            (completed_at - assigned_at) / timezone.timedelta(seconds=1)
        )
        created_at = assigned_at - timezone.timedelta(days=1)
        task = Task.objects.filter(workflow=wf1).first()
        task.status = "completed"
        task.assigned_at = assigned_at
        task.assigned_to = User.objects.get(email="foo@bar.com")
        task.completed_at = completed_at
        task.created_at = created_at
        task.handling_time_seconds = handling_time_seconds
        task.save()

        data = {
            "range": "monthly",
            "type": ["completed", "aht", "tat"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workflows".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["completed"]), 12 + 1)
        self.assertEqual(
            response.data["completed"][-1][wf1_name],
            1,
        )
        self.assertEqual(response.data["completed"][-1][wf2_name], 0)
        for idata in response.data["completed"][:-1]:
            self.assertEqual(idata[wf1_name], 0)
            self.assertEqual(idata[wf2_name], 0)

        self.assertEqual(
            response.data["aht"][-1][wf1_name],
            handling_time_seconds,
        )
        self.assertEqual(response.data["aht"][-1][wf2_name], None)
        for idata in response.data["aht"][:-1]:
            self.assertEqual(idata[wf1_name], None)
            self.assertEqual(idata[wf2_name], None)

        self.assertEqual(
            response.data["tat"][-1][wf1_name],
            (completed_at - created_at) / timezone.timedelta(seconds=1),
        )
        self.assertEqual(response.data["tat"][-1][wf2_name], None)
        for idata in response.data["tat"][:-1]:
            self.assertEqual(idata[wf1_name], None)
            self.assertEqual(idata[wf2_name], None)

    def test_workflow_id(self):
        wf1_name = Workflow.objects.get(pk=self.workflow_id).name
        wf2_name = Workflow.objects.get(pk=self.workflow_id2).name
        data = {
            "range": "monthly",
            "type": ["pending"],
            "workflow_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workflows".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["pending"]), 12 + 1)
        for idata in response.data["pending"]:
            self.assertIn(wf1_name, idata)
            self.assertNotIn(wf2_name, idata)

    def test_workflow_all_ids(self):
        wf1_name = Workflow.objects.get(pk=self.workflow_id).name
        wf2_name = Workflow.objects.get(pk=self.workflow_id2).name
        data = {
            "range": "monthly",
            "type": ["pending"],
            "workflow_id": [self.workflow_id, self.workflow_id2],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workflows".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["pending"]), 12 + 1)
        for idata in response.data["pending"]:
            self.assertIn(wf1_name, idata)
            self.assertIn(wf2_name, idata)

    def test_only_non_disabled_workflows(self):
        workflow = Workflow.objects.get(pk=self.workflow_id2)
        workflow.disabled = True
        workflow.save()
        disabled_workflow_name = workflow.name
        workflow_name = Workflow.objects.get(pk=self.workflow_id).name

        data = {
            "range": "monthly",
            "type": ["pending"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workflows".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotIn(disabled_workflow_name, response.data["pending"][0])
        self.assertEqual(response.data["pending"][-1][workflow_name], 3)


class TestWorkermetrics(APITestCase):
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

    def test_worker_complex(self):
        worker = User.objects.get(email="foo@bar.com")
        assigned_at = timezone.now() - timezone.timedelta(days=7)
        completed_at = timezone.now() - timezone.timedelta(minutes=1)
        created_at = assigned_at - timezone.timedelta(days=1)
        task = Task.objects.first()
        task.status = "completed"
        task.assigned_at = assigned_at
        task.assigned_to = worker
        task.completed_at = completed_at
        handling_time_seconds = int(
            (completed_at - assigned_at) / timezone.timedelta(seconds=1)
        )
        task.handling_time_seconds = handling_time_seconds
        task.created_at = created_at
        task.save()

        data = {
            "range": "monthly",
            "type": ["completed"],
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workers".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["completed"]), 12 + 1)
        self.assertEqual(
            response.data["completed"][-1][worker.name],
            1,
        )

        data = {
            "range": "monthly",
            "type": "aht",
        }
        response = self.client.get(
            "/v1/orgs/{}/metrics/workers".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(
            response.data["aht"][-1][worker.name],
            handling_time_seconds,
        )
        for idata in response.data["aht"][:-1]:
            self.assertEqual(idata[worker.name], None)

    def test_worker_id(self):
        worker = User.objects.get(email="foo@bar.com")
        data = {"range": "monthly", "type": ["completed"], "worker_id": worker.pk}
        response = self.client.get(
            "/v1/orgs/{}/metrics/workers".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["completed"]), 12 + 1)
        for idata in response.data["completed"]:
            self.assertIn(worker.name, idata)

    def test_worker_multiple_types(self):
        data = {"range": "monthly", "type": ["completed", "aht"]}
        response = self.client.get(
            "/v1/orgs/{}/metrics/workers".format(self.org_id),
            data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["completed"]), 12 + 1)
        self.assertEqual(len(response.data["aht"]), 12 + 1)

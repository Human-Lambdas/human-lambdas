import copy
import os

from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import Organization
from workflow_handler.models import Source, Task, TaskActivity
from workflow_handler.tests.constants import ALPHA, BETA, GAMMA

_CURRENT_DIR = os.path.dirname(__file__)


class TestTaskAudit(APITestCase):
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
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token")
        self.token = response.data["token"]

        workflow_data = {
            "name": "uploader",
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
        self.workflow_id = response.data["id"]

        workflow_data["name"] = "another workflow"
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        task_data = {"data": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"}}
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
            _ = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/assign".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data={"assigned_to": self.user_id},
                format="json",
            )
            data = copy.deepcopy(task.data)
            for idata in data:
                if idata["id"] == "foo":
                    idata["single_selection"]["value"] = "bar2"
            response_data = {"data": data}
            _ = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.pk
                ),
                data=response_data,
                format="json",
            )

    def put_correctness_audit(self, task_id, correct):
        data = {"correct": correct}
        response = self.client.put(
            f"/v1/orgs/{self.org_id}/workflows/tasks/{task_id}/audit",
            data=data,
            format="json",
        )
        return response

    def test_get_completed_task_list(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed".format(
                self.org_id,
            )
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
            self.assertIn(idata["name"], ["api", "test.csv"])

    def test_source_filter(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/orgs/{}/workflows/{}/sources".format(self.org_id, self.workflow_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        API_id = [idata for idata in response.data if idata["name"] == "api"][0]["id"]
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
        task = (
            Task.objects.filter(workflow__pk=self.workflow_id, source__name="test.csv")
            .order_by("-completed_at")
            .first()
        )
        source_id = Source.objects.get(name="test.csv").pk
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/{}/audit".format(self.org_id, task.id),
            data={"queue_id": self.workflow_id, "source_id": source_id},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["result"]["id"], task.id)
        next_task = (
            Task.objects.filter(
                source__pk=source_id,
                workflow__pk=self.workflow_id,
                completed_at__lt=task.completed_at,
            )
            .order_by("-completed_at")
            .first()
        )
        prev_task = (
            Task.objects.filter(
                source__pk=source_id,
                workflow__pk=self.workflow_id,
                completed_at__gt=task.completed_at,
            )
            .order_by("-completed_at")
            .first()
        )
        if next_task:
            self.assertEqual(
                response.data["next"],
                (
                    f"/queues/tasks/{next_task.pk}/audit?queue_id={self.workflow_id}"
                    f"&source_id={source_id}"
                ),
            )
        else:
            self.assertEqual(response.data["next"], None)
        if prev_task:
            self.assertEqual(
                response.data["previous"],
                (
                    f"/queues/tasks/{prev_task.pk}/audit?queue_id={self.workflow_id}"
                    f"&source_id={source_id}"
                ),
            )
        else:
            self.assertEqual(response.data["previous"], None)
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/{}/audit?queue_id={}&source_id=".format(
                self.org_id, task.id, self.workflow_id
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_when_no_tasks_audited_then_null_accuracy(self):
        # assert
        data = {
            "range": "daily",
            "type": ["accuracy"],
        }
        response = self.client.get(
            f"/v1/orgs/{self.org_id}/metrics",
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[-1]["accuracy"], None)

    def test_when_no_tasks_completed_then_null_accuracy(self):
        tasks = Task.objects.all()
        for t in tasks:
            t.status = "assigned"
            t.save()

        # assert
        data = {
            "range": "daily",
            "type": ["accuracy"],
        }
        response = self.client.get(
            f"/v1/orgs/{self.org_id}/metrics",
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[-1]["accuracy"], None)

    def test_when_correctness_nulled_then_null_accuracy(self):
        # arrange
        tasks = (
            Task.objects.filter(workflow__pk=self.workflow_id, source__name="test.csv")
            .order_by("-completed_at")
            .first()
        )
        response = self.put_correctness_audit(tasks.id, True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # act
        response = self.put_correctness_audit(tasks.id, None)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # assert
        data = {
            "range": "daily",
            "type": ["accuracy"],
        }
        response = self.client.get(
            f"/v1/orgs/{self.org_id}/metrics",
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[-1]["accuracy"], None)

    def test_when_completed_task_audited_false_then_accuracy_declines(self):

        # arrange
        tasks = (
            Task.objects.filter(workflow__pk=self.workflow_id, source__name="test.csv")
            .order_by("-completed_at")
            .all()
        )

        correct = tasks[0:2]
        incorrect = tasks[2:3]
        num_correct = float(len(correct))
        num_incorrect = float(len(incorrect))
        expected_accuracy = num_correct / (num_incorrect + num_correct)

        # act
        for t in correct:
            response = self.put_correctness_audit(t.id, True)
            self.assertEqual(response.status_code, status.HTTP_200_OK)

        for t in incorrect:
            response = self.put_correctness_audit(t.id, False)
            self.assertEqual(response.status_code, status.HTTP_200_OK)

        # assert
        data = {
            "range": "daily",
            "type": ["accuracy"],
        }
        response = self.client.get(
            f"/v1/orgs/{self.org_id}/metrics",
            data,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[-1]["accuracy"], expected_accuracy)

    def test_when_task_audit_submitted_then_activity_log_entry_created(self):
        # arrange
        task = (
            Task.objects.filter(workflow__pk=self.workflow_id, source__name="test.csv")
            .order_by("-completed_at")
            .first()
        )

        # act
        data = {"correct": False}
        response = self.client.put(
            f"/v1/orgs/{self.org_id}/workflows/tasks/{task.id}/audit",
            data=data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # assert
        activity = TaskActivity.objects.last()
        self.assertEqual(activity.action, "audited_incorrect")

    def test_when_incomplete_task_audited_then_error(self):
        tasks = Task.objects.all()
        for t in tasks:
            t.status = "assigned"
            t.save()

        # act
        response = self.put_correctness_audit(tasks[0].id, True)

        # assert
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestEmptyTaskAudit(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
        registration_data = {
            "email": "foo@bar.com",
            "password": "foowordbar",
            "organization": "fooInc",
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
        self.workflow_id = response.data["id"]

        workflow_data["name"] = "another workflow"
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        task_data = {"data": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"}}
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
            "/v1/orgs/{}/workflows/tasks/completed".format(
                self.org_id,
            )
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["tasks"], [], response.data)

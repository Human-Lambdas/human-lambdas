import os
from datetime import timedelta
from unittest.mock import patch

from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, User, Workflow
from human_lambdas.workflow_handler.tests import DATA_PATH
from human_lambdas.workflow_handler.tests.constants import (
    ALPHA,
    BETA,
    GAMMA,
    REGISTRATION_DATA,
    WORKFLOW_DATA_3,
)


class TestHandlingTime(APITestCase):
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

    def _start_session(self):
        response = self.client.get(
            f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}/activity"
        )
        assert response.status_code == 200

    def _save_task(self):
        data_payload = {"data": self.task.data}

        response = self.client.patch(
            f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}/save?force=true",
            data=data_payload,
            format="json",
        )
        assert response.status_code == 200

    def _submit_task(self):
        response = self.client.patch(
            f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{self.task.id}?force=true",
            data={},
            format="json",
        )
        assert response.status_code == 200

    def _post_comment(self):
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity".format(
                self.org_id,
                self.workflow_id,
                self.task.pk,
            ),
            data={"action": "comment", "comment": "hello world"},
            format="json",
        )
        self.activity_id = response.data["id"]
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def _delete_comment(self):
        self.assertIsNotNone(self.activity_id)
        response = self.client.delete(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}/activity/{3}".format(
                self.org_id, self.workflow_id, self.task.pk, self.activity_id
            ),
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

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

        with patch("django.utils.timezone.now") as now:
            # Act
            now.return_value = start_time
            self._start_session()

            now.return_value += timedelta(seconds=first_ht)
            self._save_task()

            now.return_value += timedelta(seconds=downtime)
            self._start_session()

            now.return_value += timedelta(seconds=second_ht)

            self._submit_task()

            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            # Assert
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data[-1]["aht"], total_ht)

    def test_when_comment_posted_then_ht_includes_session(self):
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

        with patch("django.utils.timezone.now") as now:
            # Act
            now.return_value = start_time
            self._start_session()

            now.return_value += timedelta(seconds=first_ht)
            self._post_comment()

            now.return_value += timedelta(seconds=downtime)
            self._start_session()

            now.return_value += timedelta(seconds=second_ht)

            self._submit_task()

            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            # Assert
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data[-1]["aht"], total_ht)

    def test_when_comment_deleted_then_ht_includes_session(self):
        # Arrange
        data = {
            "range": "monthly",
            "type": ["aht"],
        }

        first_ht = 2
        downtime = 8
        second_ht = 6
        third_ht = 3
        total_ht = first_ht + second_ht + third_ht
        start_time = timezone.now()

        with patch("django.utils.timezone.now") as now:
            # Act
            now.return_value = start_time
            self._start_session()

            now.return_value += timedelta(seconds=first_ht)
            self._post_comment()

            now.return_value += timedelta(seconds=downtime)
            self._start_session()

            now.return_value += timedelta(seconds=second_ht)
            self._delete_comment()

            now.return_value += timedelta(seconds=downtime)
            self._start_session()

            now.return_value += timedelta(seconds=third_ht)
            self._submit_task()

            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            # Assert
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data[-1]["aht"], total_ht)

    def test_when_page_refreshes_without_session_end_then_ht_not_counted(self):
        # Arrange
        data = {
            "range": "monthly",
            "type": ["aht"],
        }

        first_ht = 2
        downtime = 8
        second_ht = 6
        total_ht = second_ht
        start_time = timezone.now()

        with patch("django.utils.timezone.now") as now:
            # Act
            now.return_value = start_time

            self._start_session()
            now.return_value += timedelta(seconds=first_ht)
            # no session end

            now.return_value += timedelta(seconds=downtime)

            self._start_session()
            now.return_value += timedelta(seconds=second_ht)
            self._submit_task()

            response = self.client.get(
                "/v1/orgs/{}/metrics".format(self.org_id),
                data,
                format="json",
            )

            # Assert
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            self.assertEqual(response.data[-1]["aht"], total_ht)

import copy
import logging
import os

from rest_framework import status

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    REGISTRATION_DATA_2,
    WORKFLOW_DATA_3,
)
from human_lambdas.workflow_handler.tests.util import HLTestCase
from human_lambdas.workflow_handler.utils import STAFF_ORG_ID

logger = logging.getLogger(__name__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestTasksSave(HLTestCase):
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

    def test_save_single_selection_task(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        tasks = Task.objects.filter(workflow=workflow).all()
        output_values = ["foo1", "bar1"]
        for output_value, task in zip(output_values, tasks):

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
                    idata["single_selection"]["value"] = output_value
            data_payload = {"data": data}

            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}/save".format(
                    self.org_id, self.workflow_id, task.id
                ),
                data=data_payload,
                format="json",
            )

            self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
            self.assertEqual("in_progress", response.data["status"])
            self.assertEqual(data, response.data["data"])
            self.assertEqual("in_progress", Task.objects.get(id=task.id).status)
            self.assertIsNone(Task.objects.get(id=task.id).completed_at)

            # test retrieving the same task
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task.id
                )
            )
            self.assertEqual("in_progress", response.data["status"])
            self.assertEqual(data, response.data["data"])

    def test_when_worker_tries_to_save_task_then_passes_auth(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        task = Task.objects.filter(workflow=workflow).first()
        org = Organization.objects.get(id=self.org_id)
        org.admin.set([])
        org.save()
        response = self.client.patch(
            f"/v1/orgs/{self.org_id}/workflows/{self.workflow_id}/tasks/{task.id}/save",
            data=task.data[0],
            format="json",
        )

        assert (
            response.status_code == status.HTTP_400_BAD_REQUEST
        )  # complains not assigned == good

    def test_when_worker_tries_to_save_task_in_admin_org_then_error(self):
        workflow = Workflow.objects.get(id=self.workflow_id)
        task = Task.objects.filter(workflow=workflow).first()
        response = self.client.patch(
            f"/v1/orgs/{STAFF_ORG_ID}/workflows/{self.workflow_id}/tasks/{task.id}/save",
            data=task.data[0],
            format="json",
        )

        assert response.status_code == status.HTTP_403_FORBIDDEN

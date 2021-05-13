import copy
import logging
import os

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.tests.constants import (
    ALPHA,
    BETA,
    GAMMA,
    REGISTRATION_DATA,
)

from . import DATA_PATH

logger = logging.getLogger(__name__)


class TestCompletedTasksToCSV(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(DATA_PATH, "test.csv")
        self.total_rows = 3

        response = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.user_id = response.data["id"]

        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        self.workflow_data = {
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
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single_selection",
                    "single_selection": {
                        "options": [
                            {"id": "foo2", "name": "SO1"},
                            {"id": "bar2", "name": "SO2"},
                        ],
                    },
                },
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.workflow_data,
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

    def test_list_completed_task_internal_404(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        data = {
            "queue_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_list_completed_task_internal(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        for i in range(self.total_rows):
            response = self.client.get(
                "/v1/orgs/{0}/queues/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )

            task = response.data
            update_data = copy.deepcopy(task["data"])
            for idata in update_data:
                if idata["id"] == "foo":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "foo2"
                    else:
                        idata["single_selection"]["value"] = "bar2"
                elif idata["id"] == "secondary_output":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "SO1"
                    else:
                        idata["single_selection"]["value"] = "SO2"
            response_data = {"data": update_data, "assigned_to": self.user_id}
            _ = self.client.patch(
                "/v1/orgs/{0}/queues/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )
        data = {
            "queue_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo,secondary_output
1,2,3,foo2,SO1
4,5,6,bar2,SO2
7,8,9,foo2,SO1""".strip()
        )
        received_csv = repr(
            response.getvalue().decode("utf-8").rstrip().replace("\r", "")
        )
        self.assertEqual(needed_csv, received_csv)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_list_completed_task_internal_add_output(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        for i in range(self.total_rows - 1):
            response = self.client.get(
                "/v1/orgs/{0}/queues/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )

            task = response.data
            update_data = copy.deepcopy(task["data"])
            for idata in update_data:
                if idata["id"] == "foo":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "foo2"
                    else:
                        idata["single_selection"]["value"] = "bar2"
                elif idata["id"] == "secondary_output":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "SO1"
                    else:
                        idata["single_selection"]["value"] = "SO2"
            response_data = {"data": update_data, "assigned_to": self.user_id}

            response = self.client.patch(
                "/v1/orgs/{0}/queues/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )
        self.workflow_data["data"].append(
            {
                "id": "tertiary_output",
                "name": "terttert",
                "type": "single_selection",
                "single_selection": {
                    "options": [
                        {"id": "fooalpha2", "name": "TO1"},
                        {"id": "barbeta2", "name": "TO2"},
                    ],
                },
            }
        )

        response = self.client.patch(
            "/v1/orgs/{0}/queues/{1}".format(self.org_id, self.workflow_id),
            self.workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

        response = self.client.get(
            "/v1/orgs/{0}/queues/{1}/tasks/next".format(self.org_id, self.workflow_id),
            format="json",
        )

        task = response.data
        update_data = copy.deepcopy(task["data"])
        for idata in update_data:
            if idata["id"] == "foo":
                idata["single_selection"]["value"] = "bar2"
            elif idata["id"] == "secondary_output":
                idata["single_selection"]["value"] = "SO2"
            elif idata["id"] == "tertiary_output":
                idata["single_selection"]["value"] = "TO2"
        response_data = {"data": update_data, "assigned_to": self.user_id}

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task["id"]
            ),
            data=response_data,
            format="json",
        )
        data = {
            "queue_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo,secondary_output,tertiary_output
1,2,3,foo2,SO1,
4,5,6,bar2,SO2,
7,8,9,bar2,SO2,TO2""".strip()
        )
        received_csv = repr(
            response.getvalue().decode("utf-8").rstrip().replace("\r", "")
        )
        self.assertEqual(needed_csv, received_csv)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_list_completed_task_internal_remove_output(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        for i in range(self.total_rows - 1):
            response = self.client.get(
                "/v1/orgs/{0}/queues/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )

            task = response.data
            update_data = copy.deepcopy(task["data"])
            for idata in update_data:
                if idata["id"] == "foo":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "foo2"
                    else:
                        idata["single_selection"]["value"] = "bar2"
                elif idata["id"] == "secondary_output":
                    if i % 2 == 0:
                        idata["single_selection"]["value"] = "SO1"
                    else:
                        idata["single_selection"]["value"] = "SO2"
            response_data = {"data": update_data, "assigned_to": self.user_id}
            response = self.client.patch(
                "/v1/orgs/{0}/queues/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )

        self.workflow_data["data"] = [
            idata
            for idata in self.workflow_data["data"]
            if idata["id"] != "secondary_output"
        ]

        response = self.client.patch(
            "/v1/orgs/{0}/queues/{1}".format(self.org_id, self.workflow_id),
            self.workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

        response = self.client.get(
            "/v1/orgs/{0}/queues/{1}/tasks/next".format(self.org_id, self.workflow_id),
            format="json",
        )

        task = response.data
        update_data = copy.deepcopy(task["data"])

        for idata in update_data:
            if idata["id"] == "foo":
                idata["single_selection"]["value"] = "bar2"
        response_data = {"data": update_data, "assigned_to": self.user_id}
        response = self.client.patch(
            "/v1/orgs/{0}/queues/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task["id"]
            ),
            data=response_data,
            format="json",
        )

        data = {
            "queue_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo
1,2,3,foo2
4,5,6,bar2
7,8,9,bar2""".strip()
        )
        received_csv = repr(
            response.getvalue().decode("utf-8").rstrip().replace("\r", "")
        )
        self.assertEqual(needed_csv, received_csv)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_no_workflow_id(self):
        response = self.client.get(
            "/v1/orgs/{}/queues/tasks/completed-tasks-csv".format(self.org_id)
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

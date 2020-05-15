import logging
import os

from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import Organization

from . import DATA_PATH


logger = logging.getLogger(__file__)


class TestCompletedTasksToCSV(APITestCase):
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
        self.client.post("/v1/users/register", registration_data)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
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
                },
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single-selection",
                    "single-selection": {
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

    def test_list_completed_task_internal_404(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        data = {
            "workflow_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_list_completed_task_internal(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        for i in range(self.total_rows):
            response = self.client.get(
                "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )
            output_list = [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "foo2" if i % 2 == 0 else "bar2",
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                },
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "SO1" if i % 2 == 0 else "SO2",
                        "options": [
                            {"id": "foo2", "name": "SO1"},
                            {"id": "bar2", "name": "SO2"},
                        ],
                    },
                },
            ]
            task = response.data
            response_data = {"inputs": task["inputs"], "outputs": output_list}
            _ = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )
        data = {
            "workflow_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo,secondary_output
7,8,9,foo2,SO1
4,5,6,bar2,SO2
1,2,3,foo2,SO1""".strip()
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
                "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )
            output_list = [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "foo2" if i % 2 == 0 else "bar2",
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                },
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "SO1" if i % 2 == 0 else "SO2",
                        "options": [
                            {"id": "foo2", "name": "SO1"},
                            {"id": "bar2", "name": "SO2"},
                        ],
                    },
                },
            ]
            task = response.data
            response_data = {"inputs": task["inputs"], "outputs": output_list}
            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )

        updated_workflow_data = {
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
                },
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single-selection",
                    "single-selection": {
                        "options": [
                            {"id": "foo2", "name": "SO1"},
                            {"id": "bar2", "name": "SO2"},
                        ],
                    },
                },
                {
                    "id": "tertiary_output",
                    "name": "terttert",
                    "type": "single-selection",
                    "single-selection": {
                        "options": [
                            {"id": "fooalpha2", "name": "TO1"},
                            {"id": "barbeta2", "name": "TO2"},
                        ],
                    },
                },
            ],
        }

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, self.workflow_id),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            ),
            format="json",
        )
        output_list = [
            {
                "id": "foo",
                "name": "foo",
                "type": "single-selection",
                "single-selection": {
                    "value": "bar2",
                    "options": [
                        {"id": "foo2", "name": "foo2"},
                        {"id": "bar2", "name": "bar2"},
                    ],
                },
            },
            {
                "id": "secondary_output",
                "name": "barbar",
                "type": "single-selection",
                "single-selection": {
                    "value": "SO2",
                    "options": [
                        {"id": "foo2", "name": "SO1"},
                        {"id": "bar2", "name": "SO2"},
                    ],
                },
            },
            {
                "id": "tertiary_output",
                "name": "terttert",
                "type": "single-selection",
                "single-selection": {
                    "value": "TO2",
                    "options": [
                        {"id": "fooalpha2", "name": "TO1"},
                        {"id": "barbeta2", "name": "TO2"},
                    ],
                },
            },
        ]
        task = response.data
        response_data = {"inputs": task["inputs"], "outputs": output_list}
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task["id"]
            ),
            data=response_data,
            format="json",
        )
        data = {
            "workflow_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo,secondary_output,tertiary_output
7,8,9,bar2,SO2,TO2
4,5,6,bar2,SO2,
1,2,3,foo2,SO1,""".strip()
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
                "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                    self.org_id, self.workflow_id
                ),
                format="json",
            )
            output_list = [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "foo2" if i % 2 == 0 else "bar2",
                        "options": [
                            {"id": "foo2", "name": "foo2"},
                            {"id": "bar2", "name": "bar2"},
                        ],
                    },
                },
                {
                    "id": "secondary_output",
                    "name": "barbar",
                    "type": "single-selection",
                    "single-selection": {
                        "value": "SO1" if i % 2 == 0 else "SO2",
                        "options": [
                            {"id": "foo2", "name": "SO1"},
                            {"id": "bar2", "name": "SO2"},
                        ],
                    },
                },
            ]
            task = response.data
            response_data = {"inputs": task["inputs"], "outputs": output_list}
            response = self.client.patch(
                "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                    self.org_id, self.workflow_id, task["id"]
                ),
                data=response_data,
                format="json",
            )

        updated_workflow_data = {
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
                },
            ],
        }

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, self.workflow_id),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}/tasks/next".format(
                self.org_id, self.workflow_id
            ),
            format="json",
        )
        output_list = [
            {
                "id": "foo",
                "name": "foo",
                "type": "single-selection",
                "single-selection": {
                    "value": "bar2",
                    "options": [
                        {"id": "foo2", "name": "foo2"},
                        {"id": "bar2", "name": "bar2"},
                    ],
                },
            },
        ]
        task = response.data
        response_data = {"inputs": task["inputs"], "outputs": output_list}
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}/tasks/{2}".format(
                self.org_id, self.workflow_id, task["id"]
            ),
            data=response_data,
            format="json",
        )
        data = {
            "workflow_id": self.workflow_id,
        }
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed-tasks-csv".format(self.org_id),
            data=data,
            format="json",
        )
        needed_csv = repr(
            """Alpha,Beta,Gamma,foo
7,8,9,bar2
4,5,6,bar2
1,2,3,foo2""".strip()
        )
        received_csv = repr(
            response.getvalue().decode("utf-8").rstrip().replace("\r", "")
        )
        self.assertEqual(needed_csv, received_csv)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_no_workflow_id(self):
        response = self.client.get(
            "/v1/orgs/{}/workflows/tasks/completed-tasks-csv".format(self.org_id)
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

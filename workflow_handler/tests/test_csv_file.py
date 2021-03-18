import os

from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import Organization
from workflow_handler.tests.constants import REGISTRATION_DATA

from . import DATA_PATH


class TestCSV(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(DATA_PATH, "file_example_CSV_5000 invalid.csv")
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
                {
                    "id": "<<<",
                    "name": "<<<",
                    "type": "number",
                    "number": {"read_only": True},
                },
                {
                    "id": "First Name",
                    "name": "First Name",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Last Name",
                    "name": "Last Name",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Gender",
                    "name": "Gender",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Country",
                    "name": "Country",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "Age",
                    "name": "Age",
                    "type": "number",
                    "number": {"read_only": True},
                },
                {
                    "id": "Date",
                    "name": "Date",
                    "type": "date",
                    "date": {"read_only": True},
                },
                {
                    "id": "Id",
                    "name": "Id",
                    "type": "number",
                    "number": {"read_only": True},
                },
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
            self.workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_uploading_csv(self):
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(
                    self.org_id, self.workflow_id
                ),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

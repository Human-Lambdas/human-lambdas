import os

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.tests.constants import REGISTRATION_DATA

from . import DATA_PATH


class TestCSV(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(DATA_PATH, "data_space.csv")
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
                    "id": "car",
                    "name": "Car",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "img_1",
                    "name": "Image 1",
                    "type": "image",
                    "image": {"read_only": True},
                },
                {
                    "id": "img_2",
                    "name": "Image 2",
                    "type": "image",
                    "image": {"read_only": True},
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

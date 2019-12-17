import logging
import os

from rest_framework.test import APITestCase
from rest_framework import status
from workflow_handler.models import Workflow, Task

logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestUpload(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "test.csv")
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/users/register/", registration_data)
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_upload(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "description": "great wf",
            "inputs": [
                {"key": "Alpha", "name": "alpha", "format": "text"},
                {"key": "Beta", "name": "beta", "format": "text"},
                {"key": "Gamma", "name": "gamma", "format": "text"},
            ],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        _ = self.client.post("/workflow/create/", workflow_data, format="json")
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/workflow/{}/upload/test_file".format(workflow_id), data=data
            )
        self.assertEqual(
            response.status_code, status.HTTP_200_OK, response.content
        )

    def test_task_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "description": "great wf",
            "inputs": [
                {"key": "Alpha", "name": "alpha", "format": "text"},
                {"key": "Beta", "name": "beta", "format": "text"},
                {"key": "Gamma", "name": "gamma", "format": "text"},
            ],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        _ = self.client.post("/workflow/create/", workflow_data, format="json")
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/workflow/{}/upload/test_file".format(workflow_id), data=data
            )
        self.assertEqual(
            response.status_code, status.HTTP_200_OK, response.content
        )
        tasks = Task.objects.all()
        for task in tasks:
            self.assertEqual(3, len(task.input_data))
            for input_item in task.input_data:
                self.assertTrue(input_item.pop("value"))
                self.assertTrue(
                    any(wf_input == input_item for wf_input in workflow_data["inputs"])
                )

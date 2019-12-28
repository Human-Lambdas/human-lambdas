import logging
import os
from io import StringIO
import csv

from django.test import TestCase
from user_handler.models import User, Organization
from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow, Task
from workflow_handler.csv2task import validate_keys, process_csv


logger = logging.getLogger(__file__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestUpload(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
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
                {"id": "Alpha", "name": "alpha", "type": "text"},
                {"id": "Beta", "name": "beta", "type": "text"},
                {"id": "Gamma", "name": "gamma", "type": "text"},
            ],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-class",
                    "single-class": {"options":["foo1", "bar1"]}
                }
            ],
        }
        _ = self.client.post("/workflows/create/", workflow_data, format="json")
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/workflows/{}/upload/".format(workflow_id), data=data
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_task_creation(self):
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
                    "type": "single-class",
                    "single-class": {"options":["foo1", "bar1"]}
                }
            ],
        }
        _ = self.client.post("/workflows/create/", workflow_data, format="json")
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/workflows/{}/upload/".format(workflow_id), data=data
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        tasks = Task.objects.all()
        for task in tasks:
            self.assertEqual(3, len(task.inputs))
            for input_item in task.inputs:
                self.assertTrue(input_item.pop("value"))
                self.assertTrue(
                    any(wf_input == input_item for wf_input in workflow_data["inputs"])
                )


class TestCSV2Task(TestCase):
    def setUp(self):
        self.test_csv_string = """alpha,beta,gamma,delta
        1,2,3,4
        5,6,7,8"""

        self.test_csv_string_missing_columns = """alpha,beta,delta
        1,2,4
        5,6,8"""

        self.test_csv_string_extra_columns = """alpha,beta,gamma,delta,lambda
        1,2,3,4,5
        6,7,8,9,10"""

        self.test_csv_string_duplicate_columns = """alpha,beta,gamma,delta,alpha
        1,2,3,4,1
        5,6,7,8,5"""

        self.test_csv_file = StringIO(self.test_csv_string)
        self.test_csv_file_missing_columns = StringIO(
            self.test_csv_string_missing_columns
        )
        self.test_csv_file_extra_columns = StringIO(self.test_csv_string_extra_columns)
        self.test_csv_file_duplicate_columns = StringIO(
            self.test_csv_string_duplicate_columns
        )
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.set_password("123")
        user.save()
        org = Organization(name="fooInc")
        org.save()
        org.user.add(user)
        self.sample_workflow = Workflow(
            name="example",
            description="description",
            inputs=[
                {"id": "alpha", "name": "alpha", "type": "text",},
                {"id": "beta", "name": "beta", "type": "text",},
                {"id": "gamma", "name": "gamma", "type": "text",},
                {"id": "delta", "name": "delta", "type": "text",},
            ],
            outputs=[
                {"id": "binary", "name": "binary", "type": "binary"}
            ],
            organization=org,
            created_by=user,
        )
        self.sample_workflow.save()

    def test_validate_keys_missing_columns(self):
        title_row = next(csv.reader(self.test_csv_file_missing_columns))
        try:
            validate_keys(title_row, self.sample_workflow)
        except Exception as e:
            self.assertEqual(str(e), "The dataset is missing some columns")

    def test_validate_keys_duplicate_columns(self):
        title_row = next(csv.reader(self.test_csv_file_duplicate_columns))
        try:
            validate_keys(title_row, self.sample_workflow)
        except Exception as e:
            self.assertEqual(str(e), "There are duplicate column names")

    def test_validate_keys_correct_columns(self):
        title_row = next(csv.reader(self.test_csv_file))
        try:
            validate_keys(title_row, self.sample_workflow)
        except Exception as e:
            self.fail("An error has occurred")

    def test_validate_keys_extra_columns(self):
        title_row = next(csv.reader(self.test_csv_file_extra_columns))
        try:
            validate_keys(title_row, self.sample_workflow)
        except Exception as e:
            self.fail("An error has occurred")

    def test_process_csv(self):
        # try:
        process_csv(csv_file=self.test_csv_file, workflow=self.sample_workflow)
        title_row = ["alpha", "beta", "gamma", "delta"]
        # Check each workflow key appears once in each task
        tasks = Task.objects.all()
        for task in tasks:
            for input_item in task.inputs:
                self.assertEqual(1, title_row.count(input_item["id"]))

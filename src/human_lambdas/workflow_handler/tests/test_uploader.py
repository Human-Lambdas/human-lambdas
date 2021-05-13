import csv
import logging
import os
from io import StringIO

import pytest
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.data_handler.csv_utils import process_csv, validate_keys
from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.tests.constants import (
    ALPHA,
    BETA,
    GAMMA,
    REGISTRATION_DATA,
)

logger = logging.getLogger(__name__)

_CURRENT_DIR = os.path.dirname(__file__)


class TestUpload(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "test.csv")
        self.larger_file_path = os.path.join(_CURRENT_DIR, "data", "dataset.csv")

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_upload(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
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
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

        task = Task.objects.filter(workflow__pk=workflow_id).first()
        self.assertIn(task.source.name, self.file_path)

    def test_larger_upload(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "news",
                    "name": "news",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "type",
                    "name": "type",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.larger_file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_task_creation(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
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
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        tasks = Task.objects.all()
        for task in tasks:
            self.assertEqual(4, len(task.data))
            for data_item in task.data:
                if data_item[data_item["type"]].get("read_only"):
                    self.assertTrue(data_item[data_item["type"]].pop("value"))
                    self.assertTrue(
                        any(wf_data == data_item for wf_data in workflow_data["data"])
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
        user = User(name="foo", email="foo@bar.com")
        user.set_password("123")
        user.save()
        org = Organization(name="fooInc")
        org.save()
        org.add_admin(user)
        self.sample_workflow = Workflow(
            name="example",
            inputs=[
                {"id": "alpha", "name": "alpha", "type": "text"},
                {"id": "beta", "name": "beta", "type": "text"},
                {"id": "gamma", "name": "gamma", "type": "text"},
                {"id": "delta", "name": "delta", "type": "text"},
            ],
            outputs=[{"id": "binary", "name": "binary", "type": "binary"}],
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
            self.fail("An error has occurred " + e)

    def test_validate_keys_extra_columns(self):
        title_row = next(csv.reader(self.test_csv_file_extra_columns))
        try:
            validate_keys(title_row, self.sample_workflow)
        except Exception as e:
            self.fail("An error has occurred " + e)

    def test_process_csv(self):
        user = User.objects.get(email="foo@bar.com")
        # try:
        process_csv(
            csv_file=self.test_csv_file,
            workflow=self.sample_workflow,
            source=None,
            filename="test.csv",
            user=user,
        )
        title_row = ["alpha", "beta", "gamma", "delta"]
        # Check each workflow key appears once in each task
        tasks = Task.objects.all()
        for task in tasks:
            assert task.region is None
            for input_item in task.inputs:
                self.assertEqual(1, title_row.count(input_item["id"]))


class TestUploadExtremes(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "data_space.csv")
        self.feedback_file_path = os.path.join(_CURRENT_DIR, "data", "feedback.csv")

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_upload_spaces(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "car",
                    "name": "alpha",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "img_1",
                    "name": "beta",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "img_2",
                    "name": "gamma",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

    def test_upload_with_emoji(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "feedback",
            "data": [
                {
                    "id": "submitter_picture",
                    "name": "alpha",
                    "type": "image",
                    "image": {"read_only": True},
                },
                {
                    "id": "submitter_full_name",
                    "name": "beta",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "submission_date",
                    "name": "gamma",
                    "type": "date",
                    "date": {"read_only": True},
                },
                {
                    "id": "subject",
                    "name": "eta",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "body",
                    "name": "leta",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "organization",
                    "name": "my",
                    "type": "text",
                    "text": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="feedback").id
        with open(self.feedback_file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        workflow = Workflow.objects.get(pk=workflow_id)
        self.assertEqual(workflow.n_tasks, 6)


class TestUploadList(APITestCase):
    def setUp(self):
        self.file_path = os.path.join(_CURRENT_DIR, "data", "list_data.csv")

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_upload_list(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "data": [
                {
                    "id": "Alpha",
                    "name": "alpha",
                    "type": "list",
                    "list": {"read_only": True},
                    "subtype": "number",
                },
                {
                    "id": "Beta",
                    "name": "beta",
                    "type": "number",
                    "number": {"read_only": True},
                },
                {
                    "id": "Gamma",
                    "name": "gamma",
                    "type": "number",
                    "number": {"read_only": True},
                },
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                },
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path) as f:
            data = {"file": f}
            response = self.client.post(
                "/v1/orgs/{0}/workflows/{1}/upload".format(self.org_id, workflow_id),
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

        for task in Task.objects.filter(workflow__pk=workflow_id).all():
            list_input = [tinput for tinput in task.data if tinput["id"] == "Alpha"][0]
            self.assertIsInstance(list_input["list"]["value"], list)

    def test_when_eu_region_selected_then_no_region_on_data(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "data": [
                ALPHA,
                BETA,
                GAMMA,
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                f"/v1/orgs/{self.org_id}/workflows/{workflow_id}/upload?region=EU",
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

        task = Task.objects.filter(workflow__pk=workflow_id).first()
        self.assertIn(task.source.name, self.file_path)
        assert task.region is None

    @pytest.mark.bucket
    def test_when_non_eu_region_selected_then_confirmed_on_data(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "uploader",
            "data": [
                ALPHA,
                BETA,
                GAMMA,
            ],
        }
        _ = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        workflow_id = Workflow.objects.get(name="uploader").id
        with open(self.file_path, encoding="ISO-8859-1") as f:
            data = {"file": f}
            response = self.client.post(
                f"/v1/orgs/{self.org_id}/workflows/{workflow_id}/upload?region=AU",
                data=data,
            )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)

        task = Task.objects.filter(workflow__pk=workflow_id).first()
        self.assertIn(task.source.name, self.file_path)
        assert task.region == "AU"

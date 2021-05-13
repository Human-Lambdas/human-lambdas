import pytest
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task
from human_lambdas.workflow_handler.region import Region
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    WORKFLOW_DATA_3,
)


class TestTaskCreation(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/api-token")
        self.token = response.data["token"]

        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            WORKFLOW_DATA_3,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_create_task(self):
        task_data = {"data": {"Alpha": "data1", "Beta": "data2", "Gamma": "data3"}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)

    def test_empty_create_task(self):
        task_data = {"data": {}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )
        task_data = {}
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

    def test_empty_value_create_task(self):
        task_data = {"data": {"Alpha": "", "Beta": "", "Gamma": ""}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)

    def test_create_task_non_existing_workflow(self):
        task_data = {"data": {"Alpha": "", "Beta": "", "Gamma": ""}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, 1000),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)


class TestListTaskCreation(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
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
                {
                    "id": "Alpha",
                    "name": "alpha",
                    "type": "list",
                    "list": {"subtype": "number"},
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
            workflow_data,
            format="json",
        )
        self.workflow_id = response.data["id"]

    def test_create_list_task(self):
        task_data = {"data": {"Alpha": [1, 2, 3]}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)

    def test_create_list_task2(self):
        task_data = {"data": {"Alpha": ["1", "2", "3"]}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)


class TestFormSequenceTaskCreation(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
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
                {
                    "type": "form_sequence",
                    "name": "the formz",
                    "id": "the_formz",
                    "form_sequence": {
                        "is_required": True,
                        "data": [
                            {
                                "id": "hello",
                                "name": "hello",
                                "type": "text",
                                "text": {"value": None},
                            },
                            {
                                "id": "numbah",
                                "name": "numbah",
                                "type": "number",
                                "number": {"value": None},
                            },
                        ],
                        "history": [],
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

    def test_create_task(self):
        task_data = {"data": {"the_formz": {"hello": "word", "numbah": 2}}}
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)
        self.assertIsNotNone(task.data[0]["form_sequence"].get("data"))

    @pytest.mark.bucket
    def test_create_au_task(self):
        region = Region.AU.name
        task_data = {
            "data": {"the_formz": {"hello": "word", "numbah": 2}},
            "region": region,
        }
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)
        assert task.region == region

    def test_create_eu_task(self):
        region = "EU"
        task_data = {
            "data": {"the_formz": {"hello": "word", "numbah": 2}},
            "region": region,
        }
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
        response = self.client.post(
            "/orgs/{}/workflows/{}/tasks/create".format(self.org_id, self.workflow_id),
            task_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        task = Task.objects.get(id=response.data["id"])
        self.assertIsNotNone(task)
        assert task.region is None

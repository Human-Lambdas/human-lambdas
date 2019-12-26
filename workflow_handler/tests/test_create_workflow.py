from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow


class TestCreateWorkflow(APITestCase):
    def setUp(self):
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

    def test_create_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-class",
                    "single-class": ["foo1", "bar1"],
                }
            ],
        }
        response = self.client.post("/workflows/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_input_validation_errors(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [],
            "outputs": [],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": 1, "name": "foo", "type": "text"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "game"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

    def test_output_validation_errors(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [{"id": "foo"}],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [{"id": 1}],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [{"id": "foo", "name": "foo", "type": "notype"}],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [{"id": "foo", "name": "foo", "type": "random"}],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [
                {"id": "foo", "name": "foo", "type": "single-class"}
            ],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [{"id": "foo", "name": "foo", "type": "binary"}],
        }
        response = self.client.post(
            "/workflows/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)

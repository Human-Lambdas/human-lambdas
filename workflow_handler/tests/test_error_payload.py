from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow


class TestErrorPayloadStructure(APITestCase):

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
        self.invalid_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        self.complete_workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
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

    # Create workflow endpoint tests
    def test_create_workflow_no_jwt(self):
        response = self.client.post("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.post("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_workflow_missing_data(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
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
        response = self.client.post("/workflows/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.patch("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    # test list workflows
    def test_list_workflow_no_jwt(self):
        response = self.client.get("/workflows/")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_list_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/workflows/")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_list_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post("/workflows/")
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    # test update workflows
    def test_update_workflow_no_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.client.credentials(HTTP_AUTHORIZATION=None)
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "description": "not so great wf",
        }
        response = self.client.patch(
            "/workflows/{}".format(workflow.pk), self.complete_workflow_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "description": "not so great wf",
        }
        response = self.client.patch(
            "/workflows/{}".format(workflow.pk), self.complete_workflow_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post("/workflows/create/", self.complete_workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "description": "not so great wf",
        }
        response = self.client.post(
            "/workflows/{}".format(workflow.pk), self.complete_workflow_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

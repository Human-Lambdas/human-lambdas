from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Workflow
from human_lambdas.workflow_handler.tests.constants import (
    DELTA,
    REGISTRATION_DATA,
)


class TestErrorPayloadStructure(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]
        self.invalid_token = (
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            ".eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ij"
            "oxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        )
        self.complete_workflow_data = {
            "name": "foowf",
            "data": [
                DELTA,
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {
                        "options": ["foo1", "bar1"],
                    },
                },
            ],
        }

    # Create workflow endpoint tests
    def test_create_workflow_no_jwt(self):
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_workflow_missing_data(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "data": [
                DELTA,
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {
                        "options": ["foo1", "bar1"],
                    },
                },
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.patch(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    # test list workflows
    def test_list_workflow_no_jwt(self):
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_list_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_list_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post("/v1/orgs/{}/workflows".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    # test update workflows
    def test_update_workflow_no_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED, response.content
        )
        self.client.credentials(HTTP_AUTHORIZATION="")
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "name": "not so great wf",
        }
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_workflow_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED, response.content
        )
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "name": "not so great wf",
        }
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_workflow_wrong_method(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED, response.content
        )
        workflow_obj = Workflow.objects.filter(name=self.complete_workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.complete_workflow_data = {
            "name": "not so great wf",
        }
        response = self.client.post(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            self.complete_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

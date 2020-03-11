from rest_framework.test import APITestCase
from rest_framework import status

from workflow_handler.models import Workflow
from user_handler.models import Organization


class TestCRUDWorkflow(APITestCase):
    def setUp(self):
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/v1/users/register", registration_data)
        self.org_id1 = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token1 = response.data["access"]

        registration_data = {
            "email": "bar@bar.com",
            "password": "fooword",
            "organization": "barInc",
            "is_admin": True,
            "name": "bar",
        }
        _ = self.client.post("/v1/users/register", registration_data)
        self.org_id2 = Organization.objects.get(user__email="bar@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "bar@bar.com", "password": "fooword"}
        )
        self.access_token2 = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token1)
        self.wf_name1 = "foowf"
        workflow_data1 = {
            "name": self.wf_name1,
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {"options": ["foo1", "bar1"]},
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id1),
            workflow_data1,
            format="json",
        )

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token2)
        self.wf_name2 = "barwf"
        workflow_data1 = {
            "name": self.wf_name2,
            "description": "superb wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text"}],
            "outputs": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single-selection",
                    "single-selection": {"options": ["foo1", "bar1"]},
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id2),
            workflow_data1,
            format="json",
        )

    def test_retrieve_wrong_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token1)

        workflow_obj = Workflow.objects.filter(name=self.wf_name2)
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id1, workflow.pk)
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)

    def test_list_workflow1(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token1)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id1))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        result_1 = response.data[0]
        self.assertTrue(result_1.pop("id"))
        self.assertEqual(result_1.pop("name"), self.wf_name1)

    def test_list_workflow2(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token2)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id2))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        result_1 = response.data[0]
        self.assertTrue(result_1.pop("id"))
        self.assertEqual(result_1.pop("name"), self.wf_name2)

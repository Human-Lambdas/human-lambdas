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
        _ = self.client.post("/v1/users/register/", registration_data)
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        self.access_token = response.data["access"]
        registration_data = {
            "email": "worker@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": False,
            "name": "worker",
        }
        _ = self.client.post("/v1/users/register/", registration_data)
        response = self.client.post(
            "/v1/users/token/", {"email": "worker@bar.com", "password": "fooword"}
        )
        self.access_token_worker = response.data["access"]

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
                    "type": "single-selection",
                    "single-selection": {"options": ["foo1", "bar1"]},
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_create_workflow_worker(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token_worker)

        workflow_data = {
            "name": "workerwf",
            "description": "great wf",
            "inputs": [{"id": "foo", "name": "foo", "type": "text", "layout": {}}],
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN, response.data)
        self.assertFalse(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_retrieve_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_retrieve_workflow_worker(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token_worker)
        response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_update_workflow_worker(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        updated_text = "not so great wf"
        updated_workflow_data = {
            "description": updated_text,
        }
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token_worker)
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN, response.data)

        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        workflow = workflow_obj.first()
        self.assertNotEqual(updated_text, workflow.description)

    def test_update_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        updated_text = "not so great wf"
        updated_workflow_data = {
            "description": updated_text,
        }

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(updated_text, response.data["description"])
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        workflow = workflow_obj.first()
        self.assertEqual(updated_text, workflow.description)

    def test_list_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data1 = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data1,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_data2 = {
            "name": "foowf2",
            "description": "greater wf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data2,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        response = self.client.get("/v1/orgs/{}/workflows/".format(self.org_id))
        result_1 = response.data[0]
        result_2 = response.data[1]
        self.assertTrue(result_1.pop("id"))
        self.assertTrue(result_2.pop("id"))
        self.assertEqual(result_1.pop("n_tasks"), 0)
        self.assertEqual(result_2.pop("n_tasks"), 0)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        try:
            self.assertEqual(workflow_data2, response.data[0], response.data)
            self.assertEqual(workflow_data1, response.data[1], response.data)
        except AssertionError:
            self.assertEqual(workflow_data2, response.data[1], response.data)
            self.assertEqual(workflow_data1, response.data[0], response.data)

    def test_list_workflow2(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data1 = {
            "name": "foowf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data1,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_data2 = {
            "name": "foowf2",
            "description": "greater wf",
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
            "/v1/orgs/{}/workflows/create/".format(self.org_id),
            workflow_data2,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)

        workflow_obj = Workflow.objects.filter(name=workflow_data2["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        updated_workflow_data = {
            "disabled": True,
        }
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

        response = self.client.get("/v1/orgs/{}/workflows/".format(self.org_id))
        result_1 = response.data[0]
        self.assertTrue(result_1.pop("id"))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        workflow_data1["n_tasks"] = 0
        self.assertEqual(workflow_data1, result_1, response.data)

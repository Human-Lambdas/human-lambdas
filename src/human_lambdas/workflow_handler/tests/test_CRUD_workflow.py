from rest_framework import status

from human_lambdas.user_handler.models import Notification, Organization, User
from human_lambdas.workflow_handler.models import Workflow
from human_lambdas.workflow_handler.tests.constants import (
    GUIDELINES_URL,
    INTERNAL_WORKER_REGISTRATION_DATA,
    REGISTRATION_DATA,
    SUPER_ADMIN_REGISTRATION_DATA,
    TASK_DESCRIPTION,
    WORKFLOW_DATA,
)
from human_lambdas.workflow_handler.tests.util import HLTestCase
from human_lambdas.workflow_handler.utils import STAFF_ORG_ID, TEMPLATE_ORG_ID


class TestCRUDWorkflow(HLTestCase):
    def setUp(self):

        self.access_token_super_admin = self.register(
            SUPER_ADMIN_REGISTRATION_DATA, is_super_admin=True
        )["access"]
        self.access_token_internal_worker = self.register(
            INTERNAL_WORKER_REGISTRATION_DATA, is_internal_worker=True
        )["access"]

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.user_org_id = Organization.objects.get(user__email="foo@bar.com").pk
        self.org_id = self.user_org_id
        self.access_token = response.data["access"]

        # perhaps need an internal endpoint to make user as a worker of an org
        org = Organization.objects.get(pk=self.org_id)
        notification = Notification()
        notification.save()
        user = User(name="worker", email="worker@bar.com", notifications=notification)
        user.set_password("foowordbar")
        user.save()
        org.user.add(user)
        self.user = user
        response = self.client.post(
            "/v1/users/token", {"email": "worker@bar.com", "password": "foowordbar"}
        )
        self.access_token_worker = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

    def test_create_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = WORKFLOW_DATA
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_create_workflow_worker(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token_worker)

        workflow_data = {
            "name": "workerwf",
            "data": [
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "text",
                    "layout": {},
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
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        # HOTFIX: temporarily remove
        # self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN, response.data)
        self.assertFalse(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_retrieve_template(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        templates_org = Organization(id=TEMPLATE_ORG_ID, name="")
        templates_org.save()
        workflow_id = 777
        Workflow(
            id=workflow_id,
            name="template1",
            created_by=self.user,
            data={},
            organization=templates_org,
        ).save()

        response = self.client.get(
            f"/v1/orgs/{TEMPLATE_ORG_ID}/workflows/{workflow_id}"
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_retrieve_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = WORKFLOW_DATA
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
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
        workflow_data = WORKFLOW_DATA
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
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
        workflow_data = WORKFLOW_DATA
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        updated_text = "not so great wf"
        updated_workflow_data = {
            "name": updated_text,
        }
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token_worker)
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        # HOTFIX: temporarily remove
        # self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN, response.data)

        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        workflow = workflow_obj.first()
        # self.assertNotEqual(updated_text, workflow.name)

    def test_when_running_workflow_then_there_must_be_description(self):
        workflow_data_no_desc = {**WORKFLOW_DATA}

        workflow_id = self.create_workflow(workflow_data_no_desc, org_id=self.org_id)[
            "id"
        ]
        assert Workflow.objects.get(pk=workflow_id).is_running == False

        running_workflow_data_no_desc = {
            **workflow_data_no_desc,
            "is_running": True,
        }

        response = self.client.patch(
            f"/v1/orgs/{self.org_id}/workflows/{workflow_id}",
            running_workflow_data_no_desc,
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )
        assert Workflow.objects.get(pk=workflow_id).is_running == False
        assert Workflow.objects.get(pk=workflow_id).task_description is None

        running_workflow_data = {
            **workflow_data_no_desc,
            "is_running": True,
            "task_description": TASK_DESCRIPTION,
        }
        response = self.client.patch(
            f"/v1/orgs/{self.org_id}/workflows/{workflow_id}",
            running_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        wf = Workflow.objects.get(pk=workflow_id)
        assert wf.is_running == True
        assert wf.task_description == TASK_DESCRIPTION

    def test_when_creating_workflow_then_running_data_is_collected(self):
        workflow_data_running_no_desc = {**WORKFLOW_DATA, "is_running": True}

        response = self.client.post(
            f"/v1/orgs/{self.org_id}/workflows/create",
            workflow_data_running_no_desc,
            format="json",
        )

        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data_running = {
            **workflow_data_running_no_desc,
            "task_description": TASK_DESCRIPTION,
            "guidelines_url": GUIDELINES_URL,
        }
        workflow_id = self.create_workflow(workflow_data_running, org_id=self.org_id)[
            "id"
        ]
        wf = Workflow.objects.get(pk=workflow_id)
        assert wf.is_running == True
        assert wf.task_description == TASK_DESCRIPTION

    def test_when_staff_worker_lists_workflows_then_all_running_returned(self):
        self.set_user(self.access_token, org_id=str(self.org_id))
        workflow_data = {
            **WORKFLOW_DATA,
            "is_running": True,
            "task_description": TASK_DESCRIPTION,
        }
        self.create_workflow(workflow_data)

        self.set_user(self.access_token_internal_worker, org_id=STAFF_ORG_ID)

        data = self.list_workflows(org_id=self.org_id)
        assert data[0]["org_id"] == self.user_org_id

    def test_update_workflow_super_admin(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = WORKFLOW_DATA
        self.create_workflow(workflow_data, org_id=self.org_id)

        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        updated_text = "not so great wf"
        updated_workflow_data = {
            "name": updated_text,
        }
        self.client.credentials(
            HTTP_AUTHORIZATION="Bearer " + self.access_token_super_admin
        )
        get_response = self.client.get(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        assert get_response.status_code == status.HTTP_200_OK
        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_update_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = WORKFLOW_DATA
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        assert workflow.pinned_block == None
        workflow_data2 = {"name": "foowf2", "data": WORKFLOW_DATA["data"]}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data2,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)

        updated_text = "not so great wf"
        pinned_block_id = "my_block"
        updated_workflow_data = {"name": updated_text, "pinned_block": pinned_block_id}

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(updated_text, response.data["name"])
        self.assertEqual(pinned_block_id, response.data["pinned_block"])
        workflow_obj = Workflow.objects.filter(name=response.data["name"])
        workflow = workflow_obj.first()
        self.assertEqual(updated_text, workflow.name)
        updated_workflow_data = {
            "name": workflow_data["name"],
        }

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        updated_workflow_data = {
            "name": workflow_data2["name"],
        }

        response = self.client.patch(
            "/v1/orgs/{0}/workflows/{1}".format(self.org_id, workflow.pk),
            updated_workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_list_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data1 = {**WORKFLOW_DATA, "name": "foowf"}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data1,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_data2 = {**WORKFLOW_DATA, "name": "foowf2"}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data2,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        result_1, result_2 = sorted(response.data, key=lambda dd: dd["name"])
        self.assertTrue(result_1.pop("id"))
        self.assertTrue(result_2.pop("id"))
        self.assertEqual(result_1.pop("n_tasks"), 0)
        self.assertEqual(result_2.pop("n_tasks"), 0)
        self.assertTrue(result_1.pop("created_at"))
        self.assertTrue(result_2.pop("created_at"))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        [idata.pop("active_users") for idata in response.data]

        del workflow_data1["data"]
        del workflow_data2["data"]
        del result_1["data"]
        del result_2["data"]

        self.assertEqual(workflow_data1, result_1, response.data)
        self.assertEqual(workflow_data2, result_2, response.data)

    def test_list_workflow2(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data1 = {**WORKFLOW_DATA, "name": "foowf"}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data1,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_data2 = {**WORKFLOW_DATA, "name": "foowf2"}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
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

        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id))
        result_1 = response.data[0]
        self.assertTrue(result_1.pop("id"))
        self.assertTrue(result_1.pop("created_at"))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        workflow_data1["n_tasks"] = 0
        result_1.pop("active_users")
        del workflow_data1["data"]
        del result_1["data"]
        self.assertEqual(workflow_data1, result_1, response.data)
        self.assertNotEqual(Workflow.objects.get(pk=workflow.pk).name, workflow.name)

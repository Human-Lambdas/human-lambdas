from datetime import timedelta

from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.tests.constants import (
    REGISTRATION_DATA,
    REGISTRATION_DATA_3,
    SUPER_ADMIN_REGISTRATION_DATA,
    WORKFLOW_DATA,
)
from human_lambdas.workflow_handler.tests.util import HLTestCase
from human_lambdas.workflow_handler.utils import STAFF_ORG_ID


class TestListWorkflow(HLTestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id1 = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token1 = response.data["access"]

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA_3)
        self.org_id2 = Organization.objects.get(user__email="bar@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "bar@bar.com", "password": "foowordbar"}
        )
        self.access_token2 = response.data["access"]

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token1)
        self.wf_name1 = "foowf"
        workflow_data1 = {"name": self.wf_name1, "data": WORKFLOW_DATA["data"]}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id1),
            workflow_data1,
            format="json",
        )

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token2)
        self.wf_name2 = "barwf"
        workflow_data1 = {"name": self.wf_name2, "data": WORKFLOW_DATA["data"]}
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
        self.assertEqual(result_1["active_users"], [])

    def test_list_workflow2(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token2)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id2))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        result_1 = response.data[0]
        self.assertTrue(result_1.pop("id"))
        self.assertEqual(result_1.pop("name"), self.wf_name2)

    def test_when_staff_list_workflow_then_ordered_by_oldest_task(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token2)
        self.admin_token = self.register(
            SUPER_ADMIN_REGISTRATION_DATA, is_super_admin=True
        )["access"]
        self.wf_name2 = "foowf2"
        workflow_data2 = {"name": self.wf_name2, "data": WORKFLOW_DATA["data"]}
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id2),
            workflow_data2,
            format="json",
        )

        wfs = list(Workflow.objects.filter(organization__id=self.org_id2).all())
        wfs[0].is_running = True
        wfs[0].save()
        wfs[1].is_running = True
        wfs[1].save()

        t1 = Task(
            workflow=wfs[0],
            inputs={},
            outputs={},
            data={"foo": 2},
        )
        t1.save()
        t1.status = "completed"
        t1.created_at = timezone.now() - timedelta(days=2)
        t1.save()

        t2 = Task(
            workflow=wfs[0],
            inputs={},
            outputs={},
            data={"foo": 2},
        )
        t2.save()

        t3 = Task(
            workflow=wfs[1],
            inputs={},
            outputs={},
            data={"foo": 2},
        )
        t3.save()
        t3.created_at = timezone.now() - timedelta(days=1)
        t3.save()
        t4 = Task(
            workflow=wfs[1],
            inputs={},
            outputs={},
            data={"foo": 2},
        )
        t4.save()

        self.set_user(self.admin_token)
        response = self.client.get("/v1/orgs/{}/workflows".format(STAFF_ORG_ID))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        expected_order = [wfs[1].id, wfs[0].id]
        actual_order = [wf["id"] for wf in list(response.data)]
        assert expected_order == actual_order


class TestListNoWorkflow(APITestCase):
    def setUp(self):

        _ = self.client.post("/v1/users/register", REGISTRATION_DATA)
        self.org_id1 = Organization.objects.get(user__email="foo@bar.com").pk
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]

    def test_list_no_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/orgs/{}/workflows".format(self.org_id1))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data, [], response.data)

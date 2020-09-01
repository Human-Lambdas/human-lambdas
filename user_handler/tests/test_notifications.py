from rest_framework.test import APITestCase
from rest_framework import status
from user_handler.models import Notification, Organization, User
from workflow_handler.models import Workflow, WorkflowNotification
from user_handler.notifications import send_notification


class TestNotifications(APITestCase):
    def setUp(self):
        registration_data = {
            "email": "foo@bar.com",
            "password": "foowordbar",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        response = self.client.post("/v1/users/register", registration_data)
        user_id = response.data["id"]
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "data": [{"id": "foo", "name": "foo", "type": "text"},
                {
                    "id": "foo",
                    "name": "foo",
                    "type": "single_selection",
                    "single_selection": {"options": ["foo1", "bar1"]},
                }
            ],
        }
        response = self.client.post(
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow = Workflow.objects.get(pk=response.data["id"])
        self.workflow_id = workflow.pk

    def test_notification_retrieval(self):
        response = self.client.get("/v1/users/notifications",)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["workflow_notifications"]), 1)
        self.assertTrue(response.data["workflow_notifications"][0]["enabled"])

    def test_notification_update(self):
        response = self.client.patch("/v1/users/notifications", data={"enabled": False})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data["enabled"])

    def test_notification_update_workflow(self):
        response = self.client.patch(
            "/v1/users/notifications",
            data={
                "workflow_notifications": [{"id": self.workflow_id, "enabled": False}]
            },
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data["workflow_notifications"][0]["enabled"])

    def test_send_notification(self):
        workflow = Workflow.objects.get(pk=self.workflow_id)
        wfnotifications = WorkflowNotification.objects.filter(workflow=workflow).all()
        for wfn in wfnotifications:
            self.assertIsNone(wfn.last_notified)
        send_notification(workflow=workflow)
        wfnotifications = WorkflowNotification.objects.filter(workflow=workflow).all()
        for wfn in wfnotifications:
            self.assertIsNotNone(wfn.last_notified)

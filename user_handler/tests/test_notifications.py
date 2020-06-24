from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import Notification, WorkflowNotification, Organization, User
from workflow_handler.models import Workflow


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
        user_id = response["id"]
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.org_id = Organization.objects.get(user__email="foo@bar.com").pk
        self.access_token = response.data["access"]
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
            "/v1/orgs/{}/workflows/create".format(self.org_id),
            workflow_data,
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        user = User.objects.get(pk=user_id)
        user.notifications = Notification()
        workflow = Workflow.objects.get(pk=response["id"])
        WorkflowNotification(workflow=workflow, notification=user.notifications, enabled=False)


    def test_notification_retrieval(self):
        response = self.client.get(
            "/v1/users/notifications",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

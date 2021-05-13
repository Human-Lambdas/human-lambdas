import logging

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Workflow

logger = logging.getLogger(__name__)


class TestAPIRegistration(APITestCase):
    def test_registration(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": "foo@bar.com",
                "password": "foowordbar",
                "name": "foo",
                "organization": "barinc",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertFalse("password" in response.data)

    def test_registration_without_organization(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": "foo@bar.com",
                "password": "foowordbar",
                "name": "foo",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_registration_short_password(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": "foo@bar.com",
                "password": "fooword",
                "name": "foo",
                "organization": "barinc",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestAPIRegistrationTemplate(APITestCase):
    def setUp(self):
        user_name = "foo"
        user_email = "foo@bar.com"
        template_org_name = "fooinc"
        user_password = "foowordbar"

        user = User(name=user_name, email=user_email)
        user.set_password(user_password)
        user.save()
        self.user_id = user.id
        organization = Organization(name=template_org_name, pk=40)
        organization.save()
        self.org_id = organization.id
        organization.add_admin(user)
        wf_data = [
            {
                "id": "foo",
                "name": "foo",
                "type": "text",
                "text": {"read_only": True},
            },
            {
                "id": "foo",
                "name": "foo",
                "type": "single_selection",
                "single_selection": {"options": ["foo1", "bar1"]},
            },
        ]
        template_workflow = Workflow(
            data=wf_data, name="template1", created_by=user, organization=organization
        )
        template_workflow.save()
        self.template_id = template_workflow.pk

    def test_template_registration(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": "bar@bar.com",
                "password": "foowordbar",
                "name": "bar",
                "organization": "barinc",
                "template_id": self.template_id,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        template_workflow = Workflow.objects.get(pk=self.template_id)
        workflow = Workflow.objects.filter(organization__name="barinc").first()
        self.assertEqual(workflow.data, template_workflow.data)
        self.assertEqual(workflow.name, template_workflow.name)
        self.assertNotEqual(workflow.organization, template_workflow.organization)
        self.assertNotEqual(workflow.created_by, template_workflow.created_by)

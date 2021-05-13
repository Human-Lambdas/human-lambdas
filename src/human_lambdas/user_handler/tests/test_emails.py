import logging

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import User

logger = logging.getLogger(__name__)


class TestEmailCase(APITestCase):
    def setUp(self):
        self.user_name1 = "foo"
        self.user_email1 = "foo@bar.com"
        self.user_name2 = "Foo"
        self.user_email2 = "Foo@bar.com"
        self.organization_name = "fooinc"
        self.user_password = "foowordbar"

    def test_user_model(self):
        user = User(name=self.user_name2, email=self.user_email2)
        user.set_password(self.user_password)
        user.save()
        uid = user.pk
        user = User.objects.get(pk=uid)
        self.assertEqual(user.email, self.user_email1)
        # user = User(name=self.user_name1, email=self.user_email1)

    def test_registration(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": self.user_email2,
                "password": self.user_password,
                "name": self.user_name2,
                "organization": self.organization_name,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["email"], self.user_email1)

    def test_login1(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": self.user_email2,
                "password": self.user_password,
                "name": self.user_name2,
                "organization": self.organization_name,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        response = self.client.post(
            "/v1/users/token",
            {"email": self.user_email1, "password": self.user_password},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)
        response = self.client.post(
            "/v1/users/token",
            {"email": self.user_email2.upper(), "password": self.user_password},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)

    def test_login2(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": self.user_email1,
                "password": self.user_password,
                "name": self.user_name1,
                "organization": self.organization_name,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        response = self.client.post(
            "/v1/users/token",
            {"email": self.user_email2, "password": self.user_password},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)
        response = self.client.post(
            "/v1/users/token",
            {"email": self.user_email2.upper(), "password": self.user_password},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)

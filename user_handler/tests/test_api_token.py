from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import User


class TestAPIToken(APITestCase):
    def setUp(self):
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
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/users/api-token",
        )
        self.token = response.data["token"]

    def test_token(self):
        response = self.client.get(
            "/v1/users/api-token",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)
        self.assertEqual(self.token, response.data["token"])

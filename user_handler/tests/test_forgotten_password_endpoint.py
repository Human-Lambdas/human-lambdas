import logging

from rest_framework.test import APITestCase
from rest_framework import status

logger = logging.getLogger(__file__)


class TestInvite(APITestCase):
    def test_forgotten_password(self):
        data = {"email": "sean@humanlambdas.com"}
        response = self.client.post("/v1/users/forgotten-password", data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_forgotten_password_bad_email(self):
        data = {"email": "aaa.com"}
        response = self.client.post("/v1/users/forgotten-password", data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

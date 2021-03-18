import logging

from rest_framework import status
from rest_framework.test import APITestCase

logger = logging.getLogger(__name__)


class TestErrorPayloadStructure(APITestCase):
    def setUp(self):
        self.invalid_token = (
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
            "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
            ".SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        )
        self.invalid_REGISTRATION_DATA = {
            "organization": "barInc",
            "name": "bar",
        }

    # test 404
    def test_404(self):
        response = self.client.post("404")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # test hello world
    def test_hello_world(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/v1/users/hello")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIsInstance(response.data["errors"], list)

    # Register user endpoint tests
    def test_register_user_invalid_data(self):
        response = self.client.post(
            "/v1/users/register",
            self.invalid_REGISTRATION_DATA,
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIsInstance(response.data["errors"], list)

    def test_user_update_no_jwt(self):
        response = self.client.get("/v1/users/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIsInstance(response.data["errors"], list)

    def test_user_update_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/v1/users/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIsInstance(response.data["errors"], list)

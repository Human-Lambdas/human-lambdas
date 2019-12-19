import logging

from rest_framework.test import APITestCase
from rest_framework import status

logger = logging.getLogger(__file__)


class TestErrorPayloadStructure(APITestCase):

    def setUp(self):
        self.invalid_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        self.invalid_registration_data = {
            "email": "bar@foo.com",
            "organization": "barInc",
            "is_admin": True,
            "name": "bar",
        }

    # test 404
    def test_404(self):
        response = self.client.post("404")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # test hello world
    def test_hello_world(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/users/hello/")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # Register user endpoint tests
    def test_register_user_invalid_data(self):
        response = self.client.post(
            "/users/register/",
            self.invalid_registration_data,
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_update_no_jwt(self):
        response = self.client.get("/users/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_update_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/users/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
import logging

from django.test.utils import override_settings
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import ForgottenPassword, User

logger = logging.getLogger(__name__)


class TestInvite(APITestCase):
    def setUp(self):
        self.valid_token = "thisisavalidtoken"
        user = User(name="test", email="foowordfoo@bar.com")
        user.save()
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=self.valid_token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()

    @override_settings(DEBUG=True)
    def test_forgotten_password(self):
        data = {"email": "sean@humanlambdas.com"}
        response = self.client.post("/v1/users/forgotten-password", data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @override_settings(DEBUG=True)
    def test_forgotten_password_bad_email(self):
        data = {"email": "aaa.com"}
        response = self.client.post("/v1/users/forgotten-password", data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_bad_token(self):
        response = self.client.get(
            "/v1/users/forgotten-password-token/feo80w3fn83t4f2n0fnwf3wb793282fsu"
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_forgotten_password_good_token(self):
        response = self.client.get(
            "/v1/users/forgotten-password-token/{0}".format(self.valid_token)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # post endpoint after this line
    def test_forgotten_password_post_wrong_token(self):
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format("thisisnotavalidtoken"),
            {"password": "longlong"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post_no_password(self):
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(self.valid_token),
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post_short_password(self):
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(self.valid_token),
            {"password": "short"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post_expired_token(self):
        token = "thisisaanothersampletoken"
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=token,
            expires_at=timezone.now() - timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(token),
            {"password": "feefeefee"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post(self):
        token, email, password, new_password = (
            "thisisthecorrectsampletoken",
            "foo@bar.com",
            "foofoofoo",
            "feefeefee",
        )
        user = User(name="sample", email=email, password=password)
        user.save()
        forgotten_password = ForgottenPassword(
            email=email,
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(token),
            {"password": new_password},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.post(
            "/v1/users/token", {"email": email, "password": new_password}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

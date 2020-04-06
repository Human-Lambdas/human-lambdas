import logging

from rest_framework.test import APITestCase
from rest_framework import status
from django.test.utils import override_settings
from django.utils import timezone
from user_handler.models import ForgottenPassword

logger = logging.getLogger(__file__)


class TestInvite(APITestCase):
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
        token = "thisisasampletoken"
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.get(
            "/v1/users/forgotten-password-token/{0}".format(token)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_forgotten_password_post_wrong_token(self):
        token = "thisisaanothersampletoken"
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(token),
            {"password": "longlong"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post_no_password(self):
        token = "thisisaanothersampletoken"
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(token),
            {"password": "longlong"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_forgotten_password_post_short_password(self):
        token = "thisisaanothersampletoken"
        forgotten_password = ForgottenPassword(
            email="foowordfoo@bar.com",
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )
        forgotten_password.save()
        response = self.client.post(
            "/v1/users/forgotten-password-token/{0}".format(token),
            {"password": "short"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

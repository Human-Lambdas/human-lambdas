from unittest.mock import patch

import jwt
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.hl_rest_api.settings import (
    GOOGLE_OAUTH_CLIENT_ID,
    SECRET_KEY,
)
from human_lambdas.user_handler.models import User


class TestGoogleAuth(APITestCase):
    email = "foo@bar.com"
    name = "foo"
    organization = "barinc"
    mock_token = "blah"

    def mock_verify(self, token, request, client_id):
        if token != self.mock_token:
            raise Exception()
        if client_id != GOOGLE_OAUTH_CLIENT_ID:
            raise Exception()
        return {"email": "foo@bar.com"}

    def isUserAuthed(self, id):
        response = self.client.get(f"/v1/users/{id}")
        return response.status_code == status.HTTP_200_OK

    def test_when_register_without_password_then_ok(self):
        response = self.client.post(
            "/v1/users/register",
            {
                "email": self.email,
                "name": self.name,
                "organization": self.organization,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        assert User.objects.get(**response.data)

    def test_when_google_token_passed_then_jwt_returned(self):
        google_user = User.objects.create(
            email=self.email, name=self.name, organization=self.organization
        )

        with patch("google.oauth2.id_token.verify_oauth2_token") as verify:
            verify.side_effect = self.mock_verify

            response = self.client.post(
                "/v1/users/token/google",
                {
                    "token": self.mock_token,
                },
            )
            access_token = response.data["access"]

            decoded = jwt.decode(access_token, SECRET_KEY)
            assert decoded["user_id"] == google_user.id
            assert not self.isUserAuthed(google_user.id)
            self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {access_token}")
            assert self.isUserAuthed(google_user.id)

    def test_when_password_signin_on_google_account_then_fails(self):
        User.objects.create(
            email=self.email, name=self.name, organization=self.organization
        )

        response = self.client.post(
            "/v1/users/token",
            {
                "email": self.email,
                "password": "a",
            },
        )
        pass
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(
            response.data["errors"][0]["message"],
            "This account only uses Google sign in",
        )

    def test_when_no_user_for_token_then_bad_request(self):
        with patch("google.oauth2.id_token.verify_oauth2_token") as verify:
            verify.side_effect = self.mock_verify

            response = self.client.post(
                "/v1/users/token/google",
                {
                    "token": self.mock_token,
                },
            )
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_when_no_token_then_bad_request(self):
        response = self.client.post(
            "/v1/users/token/google",
            {},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_when_token_is_malformed_then_bad_request(self):
        response = self.client.post(
            "/v1/users/token/google",
            {
                "token": "iuhiohoiuh",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

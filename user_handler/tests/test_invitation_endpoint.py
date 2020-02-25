import logging
import datetime

from rest_framework.test import APITestCase
from rest_framework import status
from django.utils.timezone import make_aware

from user_handler.models import User, Organization, Invitation

logger = logging.getLogger(__file__)


class TestInvite(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.preset_changed_email = "bar@foo.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "fooword"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        self.user = user

        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        organization = Organization(name=self.organization_name)
        organization.save()
        self.organization = organization
        self.org_id = organization.id
        organization.user.add(user)

        self.existing_recipient, time = (
            "lambda@sigma.com",
            str(datetime.datetime.now()),
        )
        self.token = hash(str(self.existing_recipient) + str(self.org_id) + str(time))
        aware_expiry_date = make_aware(datetime.datetime.now() + datetime.timedelta(30))

        existing_invite = Invitation(
            email=self.preset_user_email,
            organization=self.organization,
            invited_by=self.user,
            token=self.token,
            expires_at=aware_expiry_date,
        )
        existing_invite.save()

    def test_invitation_get_call_no_invite(self):
        response = self.client.get(
            "/v1/users/invitation/vv3w87nvw3703yvw07vhs7vsnhs0vv4t7ehom"
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_invitation_get_call(self):
        response = self.client.get("/v1/users/invitation/{0}".format(self.token))
        self.assertEqual(response.data["invitation_email"], self.preset_user_email)
        self.assertEqual(response.data["invitation_org"], str(self.organization))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_post_call_new_user(self):
        recipient = "new@user.com"
        _ = self.client.post(
            "/v1/users/invite/", {"emails": recipient, "organization_id": self.org_id,},
        )

        token = hash(str(recipient) + str(self.org_id) + str(datetime.datetime.now()))
        aware_expiry_date = make_aware(datetime.datetime.now() + datetime.timedelta(30))

        new_user_invite = Invitation(
            email=recipient,
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=aware_expiry_date,
        )
        new_user_invite.save()

        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["message"], "Your account has been created!")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_invitation_post_call_existing_user(self):
        new_user = User(email="new@user.com")
        new_user.save()
        _ = self.client.post(
            "/v1/users/invite/",
            {"emails": "new@user.com", "organization_id": self.org_id,},
        )
        token = "s8ni3fisme03msi0s3emimc"
        new_invite = Invitation(
            email="new@user.com",
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=make_aware(datetime.datetime.now() + datetime.timedelta(30)),
        )
        new_invite.save()
        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["message"], "Success!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_expiration_30_days(self):
        recipient = "new@user.com"
        _ = self.client.post(
            "/v1/users/invite/", {"emails": recipient, "organization_id": self.org_id,},
        )

        token = hash(
            str(self.existing_recipient)
            + str(self.org_id)
            + str(datetime.datetime.now())
        )
        aware_expiry_date = make_aware(datetime.datetime.now() - datetime.timedelta(1))

        new_user_invite = Invitation(
            email=recipient,
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=aware_expiry_date,
        )
        new_user_invite.save()

        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["error"], "this token has expired!")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_invitation_post_call_already_joined_org(self):
        recipient = "lambda@sigma.com"
        _ = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "{0},alpha@beta.com,gamma@delta.com".format(recipient),
                "organization_id": self.org_id,
            },
        )
        response = self.client.post(
            "/v1/users/invitation/{0}".format(self.token),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(
            response.data["error"], "this organization has already been joined"
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

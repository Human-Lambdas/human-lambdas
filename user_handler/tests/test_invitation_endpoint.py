import datetime
import logging

from django.utils.timezone import make_aware
from rest_framework import status
from rest_framework.test import APITestCase

from user_handler.models import Invitation, Organization, User

logger = logging.getLogger(__file__)


class TestInvite(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.preset_changed_email = "bar@foo.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "foowordbar"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        self.user = user

        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        organization = Organization(name=self.organization_name)
        organization.save()
        self.organization = organization
        self.org_id = organization.id
        organization.add_admin(user)

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
            "/v1/users/invite",
            {"emails": recipient, "organization_id": self.org_id},
        )

        token = hash(str(recipient) + str(self.org_id) + str(datetime.datetime.now()))

        new_user_invite = Invitation(
            email=recipient,
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=make_aware(datetime.datetime.now() + datetime.timedelta(30)),
        )
        new_user_invite.save()

        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(response.data["message"], "Your account has been created!")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_invitation_post_call_existing_user(self):
        new_user = User(email="new@user.com")
        new_user.save()
        _ = self.client.post(
            "/v1/users/invite",
            {"emails": "new@user.com", "organization_id": self.org_id},
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
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(response.data["message"], "Success!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_expiration_30_days(self):
        _ = self.client.post(
            "/v1/users/invite",
            {"emails": self.existing_recipient, "organization_id": self.org_id},
        )

        token = hash(
            str(self.existing_recipient)
            + str(self.org_id)
            + str(datetime.datetime.now())
        )

        expired_invite = Invitation(
            email=self.existing_recipient,
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=make_aware(datetime.datetime.now() - datetime.timedelta(1)),
        )
        expired_invite.save()

        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(
            response.data["errors"][0]["message"], "this token has expired!"
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_invitation_post_call_already_joined_org(self):
        _ = self.client.post(
            "/v1/users/invite",
            {"emails": self.existing_recipient, "organization_id": self.org_id},
        )
        response = self.client.post(
            "/v1/users/invitation/{0}".format(self.token),
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(
            response.data["errors"][0]["message"],
            "this organization has already been joined",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_invitation_post_deletes_invites_after_new_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        recipient = "new@user.com"
        _ = self.client.post(
            "/v1/users/invite",
            {"emails": recipient, "organization_id": self.org_id},
        )

        token = hash(str(recipient) + str(self.org_id) + str(datetime.datetime.now()))

        new_user_invite = Invitation(
            email=recipient,
            organization=self.organization,
            invited_by=self.user,
            token=token,
            expires_at=make_aware(datetime.datetime.now() + datetime.timedelta(30)),
        )
        new_user_invite.save()

        response = self.client.post(
            "/v1/users/invitation/{0}".format(token),
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(response.data["message"], "Your account has been created!")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        response = self.client.get("/v1/orgs/{0}/invite".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for invite in response.data["invited_users"]:
            self.assertNotEqual(invite["email"], recipient)

    def test_invitation_post_deletes_invites_after_existing_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        new_user = User(email="new@user.com")
        new_user.save()
        _ = self.client.post(
            "/v1/users/invite",
            {"emails": "new@user.com", "organization_id": self.org_id},
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
            {"name": "sean", "password": "foowordbar"},
        )
        self.assertEqual(response.data["message"], "Success!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get("/v1/orgs/{0}/invite".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for invite in response.data["invited_users"]:
            self.assertNotEqual(invite["email"], "new@user.com")

    def test_when_duplicate_invite_then_only_one_invite_persisted(self):
        Invitation.objects.get_queryset().delete()
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        email = "foo2@bar.com"
        response = self.client.post(
            f"/v1/orgs/{self.org_id}/invite",
            {"emails": email, "organization_id": self.org_id},
        )

        response = self.client.get(f"/v1/orgs/{self.org_id}/invite")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["invited_users"]), 1)
        self.assertEqual(
            response.data["invited_users"][0],
            {"email": email, "is_admin": False, "pending": True},
        )

        response = self.client.post(
            f"/v1/orgs/{self.org_id}/invite",
            {"emails": email, "organization_id": self.org_id},
        )

        response = self.client.get(f"/v1/orgs/{self.org_id}/invite")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["invited_users"]), 1)
        self.assertEqual(
            response.data["invited_users"][0],
            {"email": email, "is_admin": False, "pending": True},
        )

from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token
from rest_framework import status

from .models import User, Organization


class TestUsers(TestCase):

    def setUp(self):
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.save()
        organization = Organization(name="fooinc")
        organization.save()
        organization.user.add(user)

    def test_user_data(self):
        user = User.objects.get(name="foo")
        self.assertEquals(user.email, "foo@bar.com")

    def test_organization_data(self):
        user = User.objects.get(name="foo")
        organization = Organization.objects.get(name="fooinc")
        self.assertEquals(organization.user.all()[0], user)


class TestAPILogin(APITestCase):

    def setUp(self):
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.set_password("fooword")
        user.save()
        self.token, _ = Token.objects.get_or_create(user=user)

    def test_login(self):
        response = self.client.post('/users/login/', {'email': "foo@bar.com", "password": "fooword"})
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)
        self.assertEqual(response.data['token'], self.token.key)


class TestAPIRegistration(APITestCase):

    def test_registration(self):
        response = self.client.post('/users/register/', {'email': "foo@bar.com", "password": "fooword", "name": "foo", "is_admin": True, "organization": "barinc"})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

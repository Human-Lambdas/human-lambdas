from django.test import TestCase
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

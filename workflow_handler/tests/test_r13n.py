from django.test import TestCase

from user_handler.models import Organization, User
from workflow_handler.models import Task, Workflow


class TestR13n(TestCase):
    def setUp(self):
        user = User(name="foo", email="foo@bar.com")
        user.save()
        self.user = user
        organization = Organization(name="fooInc")
        organization.save()
        organization.add_admin(user)
        self.workflow = Workflow(
            name="lkj",
            inputs={},
            outputs={},
            created_by=user,
            organization=organization,
        )
        self.workflow.save()

    def test_when_non_eu_data_accessed_then_pulled_from_bucket(self):
        task = Task(
            workflow=self.workflow, inputs={}, outputs={}, data={"foo": 2}, region="AU"
        )
        task.save()

        data = task.data
        pass

    def test_when_eu_data_accessed_then_pulled_from_db(self):
        pass

    def test_when_eu_data_saved_then_stored_in_db(self):
        pass

    def test_when_eu_data_saved_then_stored_in_bucket(self):
        pass

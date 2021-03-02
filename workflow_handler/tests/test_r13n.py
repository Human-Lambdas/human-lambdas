from typing import Optional
from unittest.mock import patch

from django.test import TestCase
from parameterized import parameterized

from user_handler.models import Organization, User
from workflow_handler.models import Task, Workflow
from workflow_handler.r13n import Region

DB_DATA = {"foo": 2}
BUCKET_DATA = {"blah": 3}
TASK_PK = 1


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

    @parameterized.expand([(Region.US,), (Region.AU,)])
    def test_when_non_eu_data_accessed_then_pulled_from_bucket(self, region: Region):
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=region.name,
        )

        with patch("workflow_handler.r13n.retrieve") as retrieve, patch(
            "workflow_handler.r13n.store"
        ) as store:
            task.save()

            retrieve.return_value = BUCKET_DATA
            t = Task.objects.get(pk=TASK_PK)

            data = t.data

            assert data == BUCKET_DATA
            calls = retrieve.mock_calls

            assert len(calls) == 1
            assert calls[0].args == (1, region)

    def test_when_non_eu_data_accessed_but_field_deferred_then_no_data(self):
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=Region.AU.name,
        )

        with patch("workflow_handler.r13n.retrieve") as retrieve, patch(
            "workflow_handler.r13n.store"
        ) as store:
            task.save()

            retrieve.return_value = BUCKET_DATA
            t = Task.objects.defer("data").get(pk=TASK_PK)

            assert len(retrieve.mock_calls) == 0

    @parameterized.expand([(Region.EU,), (None,)])
    def test_when_eu_data_accessed_then_pulled_from_db(self, region: Optional[Region]):
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=region.name if region else None,
        )
        task.save()

        with patch("workflow_handler.r13n.retrieve") as retrieve:
            retrieve.return_value = BUCKET_DATA
            t = Task.objects.get(pk=TASK_PK)

            data = t.data

            assert data == DB_DATA
            assert len(retrieve.mock_calls) == 0

    @parameterized.expand([(Region.EU,), (None,)])
    def test_when_eu_data_saved_then_stored_in_db(self, region: Optional[Region]):
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=region and region.name,
        )
        with patch("workflow_handler.r13n.store") as store, patch(
            "django.db.models.Model.save", autospec=True
        ) as save:
            task.save()

            assert len(store.mock_calls) == 0

            assert save.call_count == 1
            assert save.call_args[0][0].data == DB_DATA

    @parameterized.expand([(Region.US,), (Region.AU,)])
    def test_when_non_eu_data_saved_then_stored_in_bucket(self, region: Region):
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=BUCKET_DATA,
            region=region.name,
        )
        with patch("workflow_handler.r13n.store") as store, patch(
            "django.db.models.Model.save", autospec=True
        ) as save:
            store.return_value = BUCKET_DATA
            task.save()

            assert len(store.mock_calls) == 1
            assert store.mock_calls[0].args == (1, region, BUCKET_DATA)

            assert save.call_count == 1
            assert save.call_args[0][0].data == {}

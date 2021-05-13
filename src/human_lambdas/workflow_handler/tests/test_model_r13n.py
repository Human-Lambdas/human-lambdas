from unittest.mock import patch

import pytest
from django.test import TestCase
from parameterized import parameterized

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Task, Workflow
from human_lambdas.workflow_handler.region import Region

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

        with patch(
            "human_lambdas.workflow_handler.regional_storage.retrieve"
        ) as retrieve, patch(
            "human_lambdas.workflow_handler.regional_storage.store"
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

        with patch(
            "human_lambdas.workflow_handler.regional_storage.retrieve"
        ) as retrieve, patch(
            "human_lambdas.workflow_handler.regional_storage.store"
        ) as store:
            task.save()

            retrieve.return_value = BUCKET_DATA
            t = Task.objects.defer("data").get(pk=TASK_PK)

            assert len(retrieve.mock_calls) == 0

    def test_when_eu_data_accessed_then_pulled_from_db(self):
        region = None
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=region.name if region else None,
        )
        task.save()

        with patch(
            "human_lambdas.workflow_handler.regional_storage.retrieve"
        ) as retrieve:
            retrieve.return_value = BUCKET_DATA
            t = Task.objects.get(pk=TASK_PK)

            data = t.data

            assert data == DB_DATA
            assert len(retrieve.mock_calls) == 0

    def test_when_eu_data_saved_then_stored_in_db(self):
        region = None
        task = Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=DB_DATA,
            region=region,
        )
        with patch(
            "human_lambdas.workflow_handler.regional_storage.store"
        ) as store, patch("django.db.models.Model.save", autospec=True) as save:
            task.save()

            assert len(store.mock_calls) == 0

            assert save.call_count == 1
            assert save.call_args[0][0].data == DB_DATA

    def test_when_non_eu_data_no_id_saved_then_stored_in_bucket(self):
        region = Region.AU

        task = Task(
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=BUCKET_DATA,
            region=region.name,
        )
        with patch(
            "human_lambdas.workflow_handler.regional_storage.store"
        ) as store, patch("django.db.models.Model.save", autospec=True) as save:

            def set_id(self: Task):
                self.pk = TASK_PK

            save.side_effect = set_id
            store.return_value = BUCKET_DATA
            task.save()

            assert len(store.mock_calls) == 1
            assert store.mock_calls[0].args == (1, region, BUCKET_DATA)

            assert save.call_count == 1

    @pytest.mark.bucket
    def test_when_data_not_fetched_then_no_regional_update(self):
        region = Region.AU

        Task(
            pk=TASK_PK,
            workflow=self.workflow,
            inputs={},
            outputs={},
            data=BUCKET_DATA,
            region=region.name,
        ).save()

        task = Task.objects.defer("data").get(pk=TASK_PK)

        with patch(
            "human_lambdas.workflow_handler.regional_storage.store"
        ) as store, patch(
            "human_lambdas.workflow_handler.regional_storage.retrieve"
        ) as retrieve:
            task.save()
            assert len(store.mock_calls) == 0
            assert len(retrieve.mock_calls) == 0

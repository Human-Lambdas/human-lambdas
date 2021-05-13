from unittest import mock

import pytest
from pytest_django.fixtures import SettingsWrapper

from human_lambdas.workflow_handler.region import Region
from human_lambdas.workflow_handler.regional_storage import retrieve, store

DATA = {"BL": 42}
PK = 1


@pytest.mark.bucket
def test_when_stored_then_can_be_fetched():
    store(PK, Region.AU, DATA)
    assert retrieve(PK, Region.AU) == DATA


@pytest.mark.bucket
def test_when_retrieving_unknown_pk_then_none():
    assert retrieve(9876, Region.AU) is None


def test_when_local_dev_then_ephemeral_storage_used(settings: SettingsWrapper):
    settings.STORAGE_TEST_PREFIX = "lkjh"
    mock_region = mock.Mock()
    mock_region.name = "US"
    store(PK, mock_region, DATA)
    obj_key = f"{settings.STORAGE_TEST_PREFIX}/{mock_region.name}/{PK}"
    assert mock_region.get_bucket().blob.call_args[0][0] == obj_key

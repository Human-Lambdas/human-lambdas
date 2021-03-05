import pytest

from workflow_handler.r13n import Region, retrieve, store

DATA = {"BL": 42}

PK = 1


@pytest.mark.bucket
class TestRegionalStorage:
    def test_when_stored_then_can_be_fetched(self):
        store(PK, Region.AU, DATA)

        assert retrieve(PK, Region.AU) == DATA

    def test_when_retrieving_unknown_pk_then_none(self):
        assert retrieve(9876, Region.AU) is None

    def test_when_local_dev_then_ephemeral_storage_used(self):
        pass

    def test_when_missing_bucket_env_var_then_error(self):
        pass

    def test_when_cannot_connect_in_dev_then_warn(self):
        pass

    def test_when_cannot_connect_non_dev_then_error(self):
        pass

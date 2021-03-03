import pytest

from workflow_handler.r13n import Region, retrieve, store

DATA = {"BL": 42}

PK = 1


@pytest.mark.xfail
class TestRegionalStorage:
    def test_when_stored_then_can_be_fetched(self):
        store(PK, Region.AU, DATA)

        assert retrieve(PK, Region.AU) == DATA

    def test_when_retrieving_unknown_pk_then_none(self):
        assert retrieve(9876, Region.AU) is None

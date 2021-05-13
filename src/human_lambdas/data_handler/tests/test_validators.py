from typing import List, Optional, cast

import pytest

from human_lambdas.data_handler.data_validation import (
    DataValidationError,
    data_validation,
)
from human_lambdas.data_handler.tests.factories import (
    DateBlockFactory,
    EmailBlockFactory,
    EmailFormBlockFactory,
    make_block,
)

VALID_URL = "http://localhost.com/workflows/10/edit.png"
INVALID_URL = "http:/"


def get_url_test():
    for field in ["value", "placeholder"]:
        for url in cast(List[Optional[str]], [VALID_URL, INVALID_URL, None, ""]):
            for type in [
                "embed",
                "audio",
                "image",
                "video",
                "pdf",
                "link",
                "bounding_boxes",
            ]:
                yield (field, url, type)


class TestValidators:
    def test_when_invalid_email_then_fail(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory, email__value="bla")
        try:
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    def test_when_no_email_then_pass(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory)
        data_validation([block])

    def test_when_no_placeholder_then_pass(self):
        block = make_block(
            FACTORY_CLASS=EmailBlockFactory,
            email={"read_only": False, "use_placeholder": False},
        )
        data_validation([block])

    def test_when_invalid_placeholder_then_fail(self):
        try:
            block = make_block(
                FACTORY_CLASS=EmailBlockFactory, email__placeholder="bla"
            )
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    def test_when_email_empty_then_pass(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory, email__value="")
        data_validation([block])

    def test_when_email_form_then_pass(self):
        block = make_block(
            FACTORY_CLASS=EmailFormBlockFactory,
            form_sequence__data__0__email__value="blah@b.co",
        )
        data_validation([block])

    def test_when_no_email_form_then_pass(self):
        block = make_block(
            FACTORY_CLASS=EmailFormBlockFactory,
            form_sequence__data__0__email__value=None,
        )
        data_validation([block])

    def test_when_empty_email_form_then_pass(self):
        block = make_block(
            FACTORY_CLASS=EmailFormBlockFactory, form_sequence__data__0__email__value=""
        )
        data_validation([block])

    def test_when_invalid_email_form_then_fail(self):
        try:
            block = make_block(
                FACTORY_CLASS=EmailFormBlockFactory,
                form_sequence__data__0__email__value="blah",
            )
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    @pytest.mark.parametrize("field, url, type", get_url_test())
    def test_url_validation(self, field, url, type):
        block_opts = {type: {field: url}, "type": type}

        if type == "bounding_boxes":
            block_opts["bounding_boxes"]["value"] = (
                {"image": url} if field == "value" else {}
            )

        block = make_block(**block_opts)

        if url == INVALID_URL:
            with pytest.raises(DataValidationError):
                data_validation([block])
        else:
            data_validation([block])

    def test_when_empty_bounding_boxes_workflow_then_pass(self):
        bounding_boxes = {
            "options": [
                {"id": "option_1", "name": "Option 1"},
                {"id": "option_2", "name": "Option 2"},
            ],
            "placeholder": "",
        }
        block = make_block(
            bounding_boxes=bounding_boxes,
            type="bounding_boxes",
        )

        data_validation([block], is_workflow=True)

    def test_when_date_block_empty_workflow_then_pass(self):
        block = make_block(FACTORY_CLASS=DateBlockFactory)
        data_validation([block], is_workflow=True)

    def test_when_date_block_empty_task_then_pass(self):
        block = make_block(FACTORY_CLASS=DateBlockFactory)
        data_validation([block], is_workflow=False)

    def test_when_date_block_valid_then_pass(self):
        block = make_block(
            FACTORY_CLASS=DateBlockFactory,
            date__value="2020-01-31",
            date__placeholder="2020-01-31",
        )
        data_validation([block])

    def test_when_date_block_invalid_then_fail(self):
        block = make_block(
            FACTORY_CLASS=DateBlockFactory,
            date__value="2020/01/31",  # Invalid according to ISO-8601 (YYYY-MM-DD)
        )
        try:
            data_validation([block])
            assert False
        except:
            pass

        block = make_block(
            FACTORY_CLASS=DateBlockFactory,
            date__value="2020-31-01",  # Invalid according to ISO-8601 (YYYY-MM-DD)
        )
        try:
            data_validation([block])
            assert False
        except:
            pass

    def test_when_date_block_has_no_content_then_pass(self):
        block = make_block(
            FACTORY_CLASS=DateBlockFactory, date={"read_only": True}, type="date"
        )
        data_validation([block])

from typing import Any, Dict

import factory
import pytest

from data_handler.data_validation import DataValidationError, data_validation

VALID_URL = "http://localhost.com/workflows/10/edit.png"
INVALID_URL = "http:/"


class BlockFactory(factory.Factory):
    _id = "6c9d6441-5be5-4a15-814c-1c9413e8dd22"
    id = "email_id"
    layout = factory.Dict(
        {
            "h": 2,
            "i": "6c9d6441-5be5-4a15-814c-1c9413e8dd22",
            "minH": 2,
            "minW": 4,
            "moved": False,
            "static": False,
            "w": 5,
            "x": 7,
            "y": 0,
        }
    )
    name = "Email Block Title"
    type = "email"


def create_email_block(value):
    email: Dict[str, Any] = {
        "placeholder": "adf@asdf.co",
        "read_only": False,
        "use_placeholder": True,
    }
    if value is not None:
        email["value"] = value

    block = factory.build(dict, FACTORY_CLASS=BlockFactory, email=email, type="email")
    return block


def create_email_form_block(value):
    form_sequence = {
        "data": [
            {
                "email": {},
                "id": "email_id",
                "name": "Email Question",
                "type": "email",
            }
        ],
        "history": [],
        "is_required": True,
    }
    if value is not None:
        form_sequence["data"][0]["email"]["value"] = value

    block = factory.build(
        dict,
        FACTORY_CLASS=BlockFactory,
        form_sequence=form_sequence,
        type="form_sequence",
    )
    return block


def create_date_block(value=None, placeholder=None):
    block = factory.build(
        dict,
        FACTORY_CLASS=BlockFactory,
        date={"value": value, "placeholder": placeholder},
        type="date",
    )
    return block


def get_url_test():
    tests = []
    for field in ["value", "placeholder"]:
        for url in [VALID_URL, INVALID_URL, None, ""]:
            for type in [
                "embed",
                "audio",
                "image",
                "video",
                "pdf",
                "link",
                "bounding_boxes",
            ]:
                tests.append((field, url, type))
    return tests


class TestValidators:
    def test_when_invalid_email_then_fail(self):
        try:
            data_validation([create_email_block("bla")])
            assert False
        except DataValidationError:
            pass

    def test_when_no_email_then_pass(self):
        data_validation([create_email_block(None)])

    def test_when_no_placeholder_then_pass(self):
        block = create_email_block(None)
        del block["email"]["placeholder"]
        block["email"]["use_placeholder"] == False
        data_validation([block])

    def test_when_invalid_placeholder_then_fail(self):
        try:
            block = create_email_block(None)
            block["email"]["placeholder"] = "bla"
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    def test_when_email_empty_then_pass(self):
        data_validation([create_email_block("")])

    def test_when_email_form_then_pass(self):
        data_validation([create_email_form_block("blah@b.co")])

    def test_when_no_email_form_then_pass(self):
        data_validation([create_email_form_block(None)])

    def test_when_empty_email_form_then_pass(self):
        data_validation([create_email_form_block("")])

    def test_when_invalid_email_form_then_fail(self):
        try:
            data_validation([create_email_form_block("blah")])
            assert False
        except DataValidationError:
            pass

    @pytest.mark.parametrize("field, url, type", get_url_test())
    def test_url_validation(self, field, url, type):
        block = factory.build(
            dict, FACTORY_CLASS=BlockFactory, **{type: {}, "type": type}
        )
        block[type][field] = url

        if type == "bounding_boxes":
            block["bounding_boxes"]["value"] = (
                {"image": url} if field == "value" else {}
            )

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
        block = factory.build(
            dict,
            FACTORY_CLASS=BlockFactory,
            bounding_boxes=bounding_boxes,
            type="bounding_boxes",
        )

        data_validation([block], is_workflow=True)

    def test_when_date_block_empty_workflow_then_pass(self):
        block = create_date_block()
        data_validation([block], is_workflow=True)

    def test_when_date_block_empty_task_then_pass(self):
        block = create_date_block()
        data_validation([block], is_workflow=False)

    def test_when_date_block_valid_then_pass(self):
        block = create_date_block(value="2020-01-31", placeholder="2020-01-31")
        data_validation([block])

    def test_when_date_block_invalid_then_fail(self):
        block = create_date_block(
            value="2020/01/31"  # Invalid according to ISO-8601 (YYYY-MM-DD)
        )
        try:
            data_validation([block])
            assert False
        except:
            pass

        block = create_date_block(
            value="2020-31-01"  # Invalid according to ISO-8601 (YYYY-MM-DD)
        )
        try:
            data_validation([block])
            assert False
        except:
            pass

    def test_when_date_block_has_no_content_then_pass(self):
        block = factory.build(
            dict, FACTORY_CLASS=BlockFactory, date={"read_only": True}, type="date"
        )
        data_validation([block])

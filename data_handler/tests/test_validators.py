import unittest

from data_handler.data_validation import DataValidationError, data_validation


def create_email_block(value):
    block = {
        "_id": "6c9d6441-5be5-4a15-814c-1c9413e8dd22",
        "email": {
            "placeholder": "adf@asdf.co",
            "read_only": False,
            "use_placeholder": True,
        },
        "id": "email_id",
        "layout": {
            "h": 2,
            "i": "6c9d6441-5be5-4a15-814c-1c9413e8dd22",
            "minH": 2,
            "minW": 4,
            "moved": False,
            "static": False,
            "w": 5,
            "x": 7,
            "y": 0,
        },
        "name": "Email Block Title",
        "type": "email",
    }
    if value is not None:
        block["email"]["value"] = value
    return block


def create_email_form_block(value):
    block = {
        "_id": "74f041cc-c30a-49fb-9970-c1895cb79b59",
        "form_sequence": {
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
        },
        "id": "form_sequence_id",
        "layout": {
            "h": 4,
            "i": "74f041cc-c30a-49fb-9970-c1895cb79b59",
            "minH": 4,
            "minW": 4,
            "moved": False,
            "static": False,
            "w": 5,
            "x": 7,
            "y": 0,
        },
        "name": "Form Sequence Block Title",
        "type": "form_sequence",
    }
    if value is not None:
        block["form_sequence"]["data"][0]["email"]["value"] = value
    return block


class TestValidators(unittest.TestCase):
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

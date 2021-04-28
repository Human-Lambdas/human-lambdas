import factory
import pytest

from data_handler.data_validation import DataValidationError, data_validation

VALID_URL = "http://localhost.com/workflows/10/edit.png"
INVALID_URL = "http:/"


class BlockFactory(factory.Factory):
    class Meta:
        abstract = True

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


class EmailBlockFactory(BlockFactory):
    email = factory.Dict(
        {
            "placeholder": "adf@asdf.co",
            "read_only": False,
            "use_placeholder": True,
        }
    )
    type = "email"


class EmailFormBlockFactory(BlockFactory):
    form_sequence = factory.Dict(
        {
            "data": factory.List(
                [
                    factory.Dict(
                        {
                            "email": factory.Dict({}),
                            "id": "email_id",
                            "name": "Email Question",
                            "type": "email",
                        }
                    )
                ]
            ),
            "history": [],
            "is_required": True,
        }
    )
    type = "form_sequence"


def make_block(*args, FACTORY_CLASS=BlockFactory, **kwargs):
    return factory.build(dict, FACTORY_CLASS=FACTORY_CLASS, *args, **kwargs)


def create_date_block(value=None, placeholder=None):
    block = make_block(
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
        block = make_block(FACTORY_CLASS=EmailBlockFactory, **{"email__value": "bla"})
        try:
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    def test_when_no_email_then_pass(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory)
        data_validation([block])

    def test_when_no_placeholder_then_pass(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory)
        del block["email"]["placeholder"]
        block["email"]["use_placeholder"] == False
        data_validation([block])

    def test_when_invalid_placeholder_then_fail(self):
        try:
            block = make_block(FACTORY_CLASS=EmailBlockFactory)
            block["email"]["placeholder"] = "bla"
            data_validation([block])
            assert False
        except DataValidationError:
            pass

    def test_when_email_empty_then_pass(self):
        block = make_block(FACTORY_CLASS=EmailBlockFactory, **{"email__value": ""})
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
        block = make_block(**{type: {}, "type": type})
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
        block = make_block(
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
        block = make_block(date={"read_only": True}, type="date")
        data_validation([block])

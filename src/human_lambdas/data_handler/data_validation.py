from ast import literal_eval
from datetime import datetime
from typing import Optional

from schema import SchemaError
from typing_extensions import TypedDict

from human_lambdas.hl_rest_api.utils import is_invalid_email, is_valid_url

from .data_schema import DATA_SCHEMA

"""
The goal of these functions is to validate incoming data from human_lambdas.external sources
according to each block type.

Data validation is run in the task serializer,
CSV processing (which runs outside of the serializer)
and the workflow serializer.

data_validation is the entry point.
It validates according to the internal definition of each block's value.
We use the internal and not external definition because validation is applied
after we have transformed from our external to internal representations.
"""


class DataValidationError(Exception):
    """Data validation error"""

    pass


def convert_string(input_value):
    try:
        return literal_eval(input_value)
    except (ValueError, SyntaxError):
        raise DataValidationError(
            f"The value provided is not in right format: {input_value}"
        )


# Enforce string
def default_data_validation(data, is_workflow):
    default_value = data[data["type"]].get("value")
    if not isinstance(default_value, (str, type(None))):
        raise DataValidationError(f"Data item with id {data['id']} must be a string")
    data[data["type"]]["value"] = default_value


def validate_string_list(str_list):
    if not isinstance(str_list, list):
        return False
    if sum([0 if isinstance(item, str) is True else 1 for item in str_list]) > 0:
        return False
    return True


def validate_text_sequence(data, is_workflow):
    value = data.get(data.get("type"), {}).get("value")
    if value is not None and not validate_string_list(value):
        raise DataValidationError(
            f"Text Sequence Block with id {data['id']} is not a list of strings"
        )


def validate_selection(data, is_workflow):
    type_data = data.get(data["type"])
    value = data.get(data.get("type"), {}).get("value")
    if type_data is None:
        raise DataValidationError("Type do not match to {}".format(data["type"]))
    if data.get("type") == "single_selection" and not isinstance(
        value, (str, type(None))
    ):
        raise DataValidationError(
            f"Single Selection with id {data['id']} is not a string"
        )
    if (
        data.get("type") == "multiple_selection"
        and value is not None
        and (not isinstance(value, list) or not validate_string_list(value))
    ):
        raise DataValidationError(
            f"Multiple Selection with id {data['id']} is not a list of strings"
        )
    if "options" not in type_data:
        raise DataValidationError("Selection blocks should have a list of options")


def validate_single_selection(data, is_workflow):
    validate_selection(data, is_workflow)


def validate_multiple_selection(data, is_workflow):
    validate_selection(data, is_workflow)


def validate_binary(data, is_workflow):
    type_data = data.get("binary", {})
    binary_value = type_data.get("value")
    if isinstance(binary_value, str):
        binary_value = convert_string(binary_value)
    if not isinstance(binary_value, (bool, type(None))):
        raise DataValidationError(f"Invalid value for binary id {data['id']}")


def validate_email(data, is_workflow):
    email = data["email"]
    for k in ["value", "placeholder"]:
        v = email.get(k, None)
        if v and len(v) > 0 and is_invalid_email(v):
            raise DataValidationError(f"Invalid email {k}:{v}")


def validate_form(data, is_workflow):
    data_validation(data["form_sequence"]["data"])


def validate_embed(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_audio(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_image(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_video(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_pdf(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_link(data, is_workflow):
    _validate_url(data[data["type"]])


def validate_list(data, is_workflow):
    list_value = data[data["type"]].get("value")
    if isinstance(list_value, str):
        list_value = convert_string(list_value)
    if list_value and not isinstance(list_value, list):
        raise DataValidationError(
            f"Data item with id {data['id']} is of type list thus should be a list"
        )
    data[data["type"]]["value"] = list_value


def validate_number(data, is_workflow):
    number_value = data[data["type"]].get("value")
    if isinstance(number_value, str):
        number_value = convert_string(number_value)
    if number_value and type(number_value) not in [int, float]:
        raise DataValidationError(
            f"Data item with id {data['id']} is of type number thus should be a float or a integer"
        )
    data[data["type"]]["value"] = number_value


def validate_named_entity_recognition(data, is_workflow):
    # Require a value key with string value when it's a task
    if (
        not is_workflow
        and "value" in data[data["type"]]
        and not isinstance(data[data["type"]].get("value"), (str, type(None)))
    ):
        raise DataValidationError(
            # Externally 'value' is set on 'text' key
            f"Data item with id {data['id']} is missing 'text' or is not a string."
        )
    # Require an entities key with list type
    if "entities" in data[data["type"]] and not isinstance(
        data[data["type"]]["entities"], list
    ):
        raise DataValidationError(
            f"Data item with id {data['id']} is missing 'entities' or not a list."
        )
    # Require an options key with list type
    if "options" in data[data["type"]] and not isinstance(
        data[data["type"]].get("options"), list
    ):
        raise DataValidationError(
            f"Data item with id {data['id']} is missing 'options' or not a list."
        )

        # Enforce objects key with list type
        if not isinstance(data[data["type"]].get("entities"), (list, type(None))):
            raise DataValidationError(
                f"Data item with id {data['id']} doesn't have a valid 'entities' value."
            )

    # Enforce entity schema for any entity
    for entity in data[data["type"]].get("entities", []):
        if (
            not isinstance(entity.get("start"), int)
            or not isinstance(entity.get("end"), int)
            or not isinstance(entity.get("tag"), str)
        ):
            raise DataValidationError(
                f"Entity {entity} missing one or more properties."
            )


def validate_bounding_boxes(data, is_workflow):
    # Enforce options is list if included
    if not isinstance(data[data["type"]].get("options"), (list, type(None))):
        raise DataValidationError(
            f"Data item with id {data['id']} is missing 'options' or not a list."
        )

    bb = data[data["type"]]
    _validate_url(
        UrlPayload(
            value=bb.get("value", {}).get("image"), placeholder=bb.get("placeholder")
        )
    )

    # if it's a task
    if not is_workflow:
        # Enforce value of dict type
        if not isinstance(data[data["type"]].get("value"), dict):
            raise DataValidationError(
                f"Data item with id {data['id']} must be an object."
            )

        # Enforce image key with string type
        if not isinstance(data[data["type"]]["value"].get("image"), (str, type(None))):
            raise DataValidationError(
                f"Data item with id {data['id']} doesn't have a valid 'image' value."
            )

        # Enforce objects key with list type
        if not isinstance(
            data[data["type"]]["value"].get("objects"), (list, type(None))
        ):
            raise DataValidationError(
                f"Data item with id {data['id']} doesn't have a valid 'objects' value."
            )

        # Enforce 'objects' schema if any has been provided
        for bounding_box in data[data["type"]]["value"].get("objects", []):
            if (
                not isinstance(bounding_box, dict)
                or not isinstance(bounding_box.get("x"), (int, float))
                or not isinstance(bounding_box.get("y"), (int, float))
                or not isinstance(bounding_box.get("w"), (int, float))
                or not isinstance(bounding_box.get("h"), (int, float))
                or not isinstance(bounding_box.get("category"), str)
            ):
                raise DataValidationError(
                    f"Data item with id {data['id']} doesn't have a valid object in 'objects'."
                )
            # TO-DO: Enforce 0-1 bounds


def validate_date(data, is_workflow):
    for k in ["value", "placeholder"]:
        v = data[data["type"]].get(k)
        if not isinstance(v, (str, type(None))):
            raise DataValidationError(
                f"Data item with id {data['id']} is not a valid ISO-8601 string."
            )

        try:
            if isinstance(v, type(None)) or len(v) > 0 and datetime.fromisoformat(v):
                pass
        except:
            raise DataValidationError(
                f"Data item with id {data['id']} is not a valid ISO-8601 string."
            )


VALIDATION_STATES = {
    "single_selection": validate_single_selection,
    "multiple_selection": validate_multiple_selection,
    "binary": validate_binary,
    "form_sequence": validate_form,
    "list": validate_list,
    "number": validate_number,
    "named_entity_recognition": validate_named_entity_recognition,
    "bounding_boxes": validate_bounding_boxes,
    "email": validate_email,
    "embed": validate_embed,
    "audio": validate_audio,
    "image": validate_image,
    "video": validate_video,
    "pdf": validate_pdf,
    "link": validate_link,
    "text_sequence": validate_text_sequence,
    "date": validate_date,
}


def data_validation(data, is_workflow=False):
    try:
        data = DATA_SCHEMA.validate(data)
    except SchemaError as exception_text:
        raise DataValidationError(exception_text)
    for data_item in data:
        VALIDATION_STATES.get(data_item["type"], default_data_validation)(
            data_item, is_workflow
        )
    return data


class UrlPayload(TypedDict):
    value: Optional[str]
    placeholder: Optional[str]


def _validate_url(p: UrlPayload):
    for k in ["value", "placeholder"]:
        v = p.get(k, None)
        if v and len(v) > 0 and not is_valid_url(v):
            raise DataValidationError(f"Invalid url {k}: {v}")

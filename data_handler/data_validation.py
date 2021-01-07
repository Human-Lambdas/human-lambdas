from ast import literal_eval

from schema import SchemaError

from .data_schema import DATA_SCHEMA


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


def default_data_validation(data):
    pass


def validate_selection(data):
    type_data = data.get(data["type"])
    if type_data is None:
        raise DataValidationError("Type do not match to {}".format(data["type"]))
    if "options" not in type_data:
        raise DataValidationError("Selection blocks should have a list of options")


def validate_single_selection(data):
    validate_selection(data)


def validate_multiple_selection(data):
    validate_selection(data)


def validate_form(data):
    pass


def validate_list(data):
    list_value = data[data["type"]].get("value")
    if isinstance(list_value, str):
        list_value = convert_string(list_value)
    if list_value and not isinstance(list_value, list):
        raise DataValidationError(
            f"Data item with id {data['id']} is of type list thus should be a list"
        )
    data[data["type"]]["value"] = list_value


def validate_number(data):
    number_value = data[data["type"]].get("value")
    if isinstance(number_value, str):
        number_value = convert_string(number_value)
    if number_value and type(number_value) not in [int, float]:
        raise DataValidationError(
            f"Data item with id {data['id']} is of type number thus should be a float or a integer"
        )
    data[data["type"]]["value"] = number_value


def validate_named_entity_recognition(data):
    if "value" not in data[data["type"]] or not isinstance(
        data[data["type"]].get("value"), str
    ):
        raise DataValidationError(
            # Externally 'value' is set on 'text' key
            f"Data item with id {data['id']} is missing 'text' or is not a string."
        )
    if "entities" in data[data["type"]] and not isinstance(
        data[data["type"]]["entities"], list
    ):
        raise DataValidationError(
            f"Data item with id {data['id']} is missing 'entities' or not a list."
        )
    if "options" in data[data["type"]] and not isinstance(
        data[data["type"]].get("options"), list
    ):
        raise DataValidationError(
            f"Data item with id {data['id']} is missing 'options' or not a list."
        )
    for entity in data[data["type"]].get("entities", []):
        if (
            not isinstance(entity.get("start"), int)
            or not isinstance(entity.get("end"), int)
            or not isinstance(entity.get("tag"), str)
        ):
            raise DataValidationError(
                f"Entity {entity} missing one or more properties."
            )


VALIDATION_STATES = {
    "single_selection": validate_single_selection,
    "multiple_selection": validate_multiple_selection,
    "form_sequence": validate_form,
    "list": validate_list,
    "number": validate_number,
    "named_entity_recognition": validate_named_entity_recognition,
}


def data_validation(data):
    try:
        data = DATA_SCHEMA.validate(data)
    except SchemaError as exception_text:
        raise DataValidationError(exception_text)
    for data_item in data:
        VALIDATION_STATES.get(data_item["type"], default_data_validation)(data_item)
    return data

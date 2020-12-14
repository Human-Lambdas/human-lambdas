from schema import SchemaError

from .schemas import DATA_SCHEMA


class DataValidationError(Exception):
    """Data validation error"""

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


def validate_number(data):
    number_value = data[data["type"]].get("value")
    if number_value and type(number_value) not in [int, float]:
        raise DataValidationError(
            f"Data item with id {data['id']} is of type number thus should be a float or a integer"
        )


def default_data_validation(data):
    pass


VALIDATION_STATES = {
    "single_selection": validate_single_selection,
    "multiple_selection": validate_multiple_selection,
    "form_sequence": validate_form,
}


def data_validation(data):
    try:
        data = DATA_SCHEMA.validate(data)
    except SchemaError as exception_text:
        raise DataValidationError(exception_text)
    for data_item in data:
        VALIDATION_STATES.get(data_item["type"], default_data_validation)(data_item)
    return data

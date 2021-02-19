import ctypes
import logging
import re

from django.utils import timezone
from email_validator import (
    EmailNotValidError,
    EmailSyntaxError,
    validate_email,
)
from rest_framework.exceptions import ErrorDetail
from rest_framework.views import exception_handler

logger = logging.getLogger(__name__)


def process_errors(error):
    error_list = []
    if isinstance(error, list):
        for message in error:
            error_list.append({"message": message})
    else:
        detail = error.get("detail")
        if detail:
            error_list.append({"message": detail})
            messages = error.get("messages", [])
            for message in messages:
                error_list.append({"message": message})
        else:
            fields = error.keys()
            for field in fields:
                if not isinstance(field, ErrorDetail) and isinstance(
                    error[field], dict
                ):
                    inner_fields = error[field].keys()
                    for inner_field in inner_fields:
                        for message in error[field][inner_field]:
                            error_object = {
                                "field": f"{field}-->{inner_field}",
                                "message": message,
                            }
                            error_list.append(error_object)
                else:
                    for message in error[field]:
                        error_object = {"field": field, "message": message}
                        error_list.append(error_object)
    return error_list


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None:
        response.data = {
            "status_code": response.status_code,
            "errors": process_errors(response.data),
        }
    return response


def is_invalid_email(email):
    try:
        validate_email(email)
        return False
    except (EmailSyntaxError, EmailNotValidError) as e:
        logger.info(f"{e}")
        return True


def generate_unique_token(*args):
    to_hash = str(timezone.now())
    for arg in args:
        to_hash += str(arg)
    token = ctypes.c_size_t(hash(to_hash)).value
    return token


def is_valid_url(text):
    if re.match(
        r"https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]"
        r"{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)",
        text,
    ):
        return True
    return False

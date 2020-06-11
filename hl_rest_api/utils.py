import logging
import re
import ctypes

from django.utils import timezone
from django.conf import settings
from rest_framework.views import exception_handler
from rest_framework.exceptions import ErrorDetail
from sendgrid import SendGridAPIClient

logger = logging.getLogger(__file__)


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
    regex = r"^([a-zA-Z0-9_+!\"\$ \-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|"
    regex += r"(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
    if bool(re.fullmatch(regex, email)):
        return False
    else:
        return True


def generate_unique_token(*args):
    to_hash = str(timezone.now())
    for arg in args:
        to_hash += str(arg)
    token = ctypes.c_size_t(hash(to_hash)).value
    return token


class MockSendGrid:
    def send(self, message):
        logger.debug("Following message was sent: %s", message)


class SendGridClient(object):
    instance = None

    def __new__(cls):
        if settings.DEBUG:
            return MockSendGrid()
        else:
            if cls.instance is not None:
                return cls.instance
            else:
                cls.instance = SendGridAPIClient(settings.SENDGRID_API_KEY)
                return cls.instance

import logging
import re
import ctypes

from django.conf import settings
from django.utils import timezone
from sendgrid import SendGridAPIClient

logger = logging.getLogger(__file__)


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

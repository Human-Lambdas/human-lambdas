import logging
import re

from django.conf import settings
import requests

logger = logging.getLogger(__file__)

HL_API_URL = settings.API_URL
API_KEY = settings.HL_CLIENT_API_KEY
ORG_ID = settings.HL_ORG_ID


def create_task(workflow_id, data):

    task = {"data": data}

    if settings.DEBUG:
        return logger.info(f"Testing, didn't enque task: {task}\n")

    headers = {"Authorization": "Token %s" % API_KEY}
    PATH = "/orgs/%d/workflows/%d/tasks/create" % (int(ORG_ID), workflow_id)
    r = requests.post(HL_API_URL + PATH, headers=headers, json=task)

    if r.status_code != 200:
        return logger.info(f"Task failed to enqueue: {r.text}\n")

    return logger.info(f"Successfully enqueued task: {task}\n")


def enqueue_signup(user_id, email_address, name):
    WORKFLOW_ID = 208

    data = {
        "user_id": user_id,
        "email_address": email_address,
        "name": name,
        "domain": re.sub("^.*@", "https://", email_address),
    }

    return create_task(WORKFLOW_ID, data)

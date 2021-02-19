import logging
from typing import Any, Dict

from django.utils import timezone
from google.cloud import storage

from workflow_handler.models import Task

logger = logging.getLogger(__file__)

buckets = ["us-data-stg", "eu-data-stg", "au-data-stg"]


def store(task: Task) -> None:
    client = storage.Client()

    for b in buckets:
        logger.warning(f"{timezone.now()} get_bucket")
        bucket = client.get_bucket(b)
        logger.warning(f"{timezone.now()} done")

        logger.warning(f"{timezone.now()} store blob")
        blob = bucket.blob("test.txt")
        logger.warning(f"{timezone.now()} upload_from_string")
        blob.upload_from_string(f"written {timezone.now()}")
        logger.warning(f"{timezone.now()} done {b}")
    return None


def retrieve(task: Task) -> Dict[Any, Any]:
    client = storage.Client()

    for b in buckets:
        logger.warning(f"{timezone.now()} get_bucket")
        bucket = client.get_bucket(b)
        logger.warning(f"{timezone.now()} done")

        logger.warning(f"{timezone.now()} retrieve blob")
        blob = bucket.blob("test.txt")
        logger.warning(f"{timezone.now()} download_as_text")
        logger.warning(f"{timezone.now()} text: {blob.download_as_text()}")
        logger.warning(f"{timezone.now()} done {b}")
    return {}

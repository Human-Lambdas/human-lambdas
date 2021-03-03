import json
import logging
import time
from contextlib import contextmanager
from enum import Enum
from typing import Any, Dict, Optional, Union

from google.api_core.exceptions import NotFound
from google.cloud import storage

logger = logging.getLogger(__name__)


@contextmanager
def timer(label: Optional[str]):
    ss = time.monotonic()
    try:
        yield
    finally:
        ee = time.monotonic()
        duration = ee - ss
        logger.info(f"{label}: {round(duration * 1000)}ms")


class Region(Enum):
    bucket: str

    def __new__(cls, bucket: str):
        obj = object.__new__(cls)
        obj.bucket = bucket
        return obj

    EU = ""
    AU = "au-data-stg"
    US = "us-data-stg"


def store(pk: int, region: Region, data: Union[None, Dict[Any, Any]]) -> None:
    if region == Region.EU:
        raise NotImplementedError("EU data should not use buckets")

    with timer(f"storing task id: {pk} in {region.name}"):
        client = storage.Client()

        bucket = client.get_bucket(region.bucket)
        blob = bucket.blob(f"{pk}")
        blob.upload_from_string(json.dumps(data))


def retrieve(pk: int, region: Region) -> Union[None, Dict[Any, Any]]:
    if region == Region.EU:
        raise NotImplementedError("EU data should not use buckets")

    with timer(f"retrieving task id: {pk} from {region.name}"):
        client = storage.Client()

        bucket = client.get_bucket(region.bucket)
        blob = bucket.blob(f"{pk}")
        try:
            text = blob.download_as_text()
            return json.loads(text)
        except NotFound:
            logger.warning(f"Task {pk} not found in cloud bucket {region.bucket}.")
            return None

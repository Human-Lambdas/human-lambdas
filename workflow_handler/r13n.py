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
    bucket: storage.Bucket

    def __new__(cls, bucket_name: str):

        obj = object.__new__(cls)
        try:
            with timer(f"Connecting to cloud storage bucket {bucket_name}"):
                client = storage.Client()
                obj.bucket = client.get_bucket(bucket_name)
        except:
            logger.warn(f"Failed!")  # TODO remove when dev env sorted.
        return obj

    AU = "au-data-stg"
    US = "us-data-stg"


def store(pk: int, region: Region, data: Union[None, Dict[Any, Any]]) -> None:
    with timer(f"storing task id: {pk} in {region.name}"):
        blob = region.bucket.blob(f"{pk}")
        blob.upload_from_string(json.dumps(data))


def retrieve(pk: int, region: Region) -> Union[None, Dict[Any, Any]]:
    with timer(f"retrieving task id: {pk} from {region.name}"):
        blob = region.bucket.blob(f"{pk}")
        try:
            text = blob.download_as_text()
            return json.loads(text)
        except NotFound:
            logger.warning(f"Task {pk} not found in cloud bucket {region.bucket}.")
            return None

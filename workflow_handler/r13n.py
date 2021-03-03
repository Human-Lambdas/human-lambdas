import json
import logging
from enum import Enum
from typing import Any, Dict, Union

from google.api_core.exceptions import NotFound
from google.cloud import storage


class Region(Enum):
    bucket: str

    def __new__(cls, bucket: str):
        obj = object.__new__(cls)
        obj.bucket = bucket
        return obj

    EU = ""
    AU = "au-data-stg"
    US = "us-data-stg"


logger = logging.getLogger(__file__)


def store(pk: int, region: Region, data: Union[None, Dict[Any, Any]]) -> None:
    if region == Region.EU:
        raise NotImplementedError("EU data should not use buckets")

    client = storage.Client()

    bucket = client.get_bucket(region.bucket)
    blob = bucket.blob(f"{pk}")
    blob.upload_from_string(json.dumps(data))


def retrieve(pk: int, region: Region) -> Union[None, Dict[Any, Any]]:
    if region == Region.EU:
        raise NotImplementedError("EU data should not use buckets")

    client = storage.Client()

    bucket = client.get_bucket(region.bucket)
    blob = bucket.blob(f"{pk}")
    try:
        text = blob.download_as_text()
        return json.loads(text)
    except NotFound:
        logger.warning(f"Task {pk} not found in cloud bucket {region.bucket}.")
        return None

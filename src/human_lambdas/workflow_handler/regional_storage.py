import json
import logging
from typing import Any, Dict, Union

from django.conf import settings
from google.api_core.exceptions import NotFound
from google.cloud.storage import Blob

from human_lambdas.workflow_handler.latency import timer
from human_lambdas.workflow_handler.region import Region

logger = logging.getLogger(__name__)


def _get_key(pk: int, region: Region) -> str:
    if settings.STORAGE_TEST_PREFIX:
        return f"{settings.STORAGE_TEST_PREFIX}/{region.name}/{pk}"
    else:
        return f"{pk}"


def store(pk: int, region: Region, data: Union[None, Dict[Any, Any]]) -> None:
    key = _get_key(pk, region)
    with timer(f"storing task id: {key} in {region.name}"):
        blob: Blob = region.get_bucket().blob(f"{key}")
        blob.upload_from_string(json.dumps(data))


def retrieve(pk: int, region: Region) -> Union[None, Dict[Any, Any]]:
    key = _get_key(pk, region)
    with timer(f"retrieving task id: {key} from {region.name}"):
        blob = region.get_bucket().blob(f"{key}")
        try:
            text = blob.download_as_text()
            return json.loads(text)
        except NotFound:
            logger.warning(
                f"Task {key} not found in cloud bucket {region.bucket_name}."
            )
            return None

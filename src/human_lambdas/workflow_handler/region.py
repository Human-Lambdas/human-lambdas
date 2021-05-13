import functools
from enum import Enum

from django.conf import settings
from google.cloud import storage

from human_lambdas.workflow_handler.latency import timer


class Region(Enum):
    bucket_name: str

    @functools.lru_cache
    def get_bucket(self) -> storage.Bucket:

        if self.bucket_name is None:
            raise ValueError("Regional bucket name is None. Config is missing.")

        with timer(f"Connecting to cloud storage bucket {self.bucket_name}"):
            client = storage.Client()
            return client.get_bucket(self.bucket_name)

    def __new__(cls, bucket_name: str):
        obj = object.__new__(cls)
        obj.bucket_name = bucket_name
        return obj

    AU = settings.REGIONAL_BUCKET_AU
    US = settings.REGIONAL_BUCKET_US

import logging
import time
from contextlib import contextmanager
from typing import Any, Callable, Collection, Dict, Optional

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger(__name__)


class QueryLogger:
    """
    https://docs.djangoproject.com/en/3.1/topics/db/instrumentation/
    """

    def __call__(
        self,
        execute: Callable[..., Any],
        sql: str,
        params: Collection[Any],
        many: bool,
        context: Dict[Any, Any],
    ):
        current_query: Dict[str, Any] = {"sql": sql, "params": params, "many": many}
        start = time.monotonic()
        try:
            result = execute(sql, params, many, context)
        except Exception as e:
            current_query["status"] = "error"
            current_query["exception"] = e
            raise
        else:
            current_query["status"] = "ok"
            duration = time.monotonic() - start
            current_query["duration"] = round(duration * 1000, 3)
            return result


class LatencyMiddleware(MiddlewareMixin):
    def process_request(self, request: HttpRequest):
        if request.path.endswith("next"):
            request.start_time = time.monotonic()

    def process_response(self, request: HttpRequest, response: HttpResponse):
        if request.path.endswith("next"):
            end = time.monotonic()
            total: float = end - request.start_time
            logger.info(f"/next django latency: {latency_str(total)}")

        return response


def latency_str(latency: float):
    return f"{round(latency * 1000, 3)} ms"


@contextmanager
def timer(label: Optional[str]):
    ss = time.monotonic()
    try:
        yield
    finally:
        ee = time.monotonic()
        duration = ee - ss
        logger.info(f"{label}: {round(duration * 1000)}ms")

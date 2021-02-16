import json
import logging
import time
from typing import Any, Callable, Collection, Dict

from django.core.handlers.wsgi import WSGIRequest
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger(__name__)

"""
https://docs.djangoproject.com/en/3.1/topics/db/instrumentation/
"""


class QueryLogger:
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
            return result
        finally:
            duration = time.monotonic() - start
            current_query["duration"] = round(duration * 1000, 3)
            logger.info(f"query: {json.dumps(current_query)}")


class LatencyMiddleware(MiddlewareMixin):
    def process_request(self, request: WSGIRequest):
        if request.path.endswith("next"):
            logger.info(f"/next django middleware start")
            request.start_time = time.monotonic()

    def process_response(self, request: Any, response: Any):
        if request.path.endswith("next"):
            total = time.monotonic() - request.start_time
            logger.info(f"/next django latency: {round(total * 1000, 3)} ms")

        return response

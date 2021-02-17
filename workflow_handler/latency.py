import json
import logging
import time
from typing import Any, Callable, Collection, Dict

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
            # logger.info(f"query: {json.dumps(current_query)}")
            return result


class LatencyMiddleware(MiddlewareMixin):
    def process_request(self, request: HttpRequest):
        if request.path.endswith("next"):
            m = time.monotonic()
            logger.info(f"/next django middleware start")
            after_log_init = time.monotonic()
            request.start_time = m
            request.after_log_init = after_log_init
            logger.info(f"/next log initialised")

    def process_response(self, request: HttpRequest, response: HttpResponse):
        if request.path.endswith("next"):
            end = time.monotonic()
            excl_log_init = end - request.after_log_init
            total: float = end - request.start_time
            logger.info(
                f"/next django latency: {latency_str(total)}, {latency_str(excl_log_init)})"
            )

        return response


def latency_str(latency: float):
    return f"{round(latency * 1000, 3)} ms"

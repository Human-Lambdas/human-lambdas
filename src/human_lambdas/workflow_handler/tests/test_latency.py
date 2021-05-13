from typing import Any, Dict, List
from unittest.mock import patch

import pytest
from django.http.request import HttpRequest
from django.http.response import HttpResponse

from human_lambdas.workflow_handler.latency import (
    LatencyMiddleware,
    QueryLogger,
)


def test_when_query_logger_invoked_then_okay():
    ql = QueryLogger()

    def mock_execute(*args: List[Any], **kwargs: Dict[Any, Any]):
        return 42

    assert ql(mock_execute, "", {}, False, {}) == 42


def test_when_query_logger_exception_then_raised():
    ql = QueryLogger()

    def mock_execute(*args: List[Any], **kwargs: Dict[Any, Any]):
        raise ValueError()

    with pytest.raises(ValueError):
        ql(mock_execute, "", {}, False, {})


def test_when_latency_middleware_next_then_logs():
    with patch("human_lambdas.workflow_handler.latency.logger.info") as info:
        request = HttpRequest()
        request.path = "asdf/next"

        lm = LatencyMiddleware()
        lm.process_request(request)

        lm.process_response(request, HttpResponse())
        assert info.call_count > 0


def test_when_latency_middleware_not_next_then_no_log():
    with patch("human_lambdas.workflow_handler.latency.logger.info") as info:
        request = HttpRequest()
        request.path = "asdf"

        lm = LatencyMiddleware()
        lm.process_request(request)

        lm.process_response(request, HttpResponse())
        assert info.call_count == 0

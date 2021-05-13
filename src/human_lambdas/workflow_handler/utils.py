import copy
import datetime
import logging
import os
from typing import Any, Dict

import cchardet
import requests
import sentry_sdk
from django.utils import timezone
from django.utils.timezone import make_aware
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.request import Request
from rest_framework.response import Response

from .models import WebHook, Workflow, WorkflowNotification

logger = logging.getLogger(__name__)

TEMPLATE_ORG_ID = 40
STAFF_ORG_ID = 1000000000


def parse_dates(request):
    try:
        start_date = datetime.datetime.fromisoformat(
            request.query_params.get("start_date")
        )  # YYYY-MM-DD
    except:
        start_date = datetime.datetime(2019, 1, 1)
    try:
        end_date = datetime.datetime.fromisoformat(
            request.query_params.get("end_date")
        )  # YYYY-MM-DD
        end_date += datetime.timedelta(days=1, microseconds=-1)
    except:
        end_date = datetime.datetime.today()
    return make_aware(start_date), make_aware(end_date)


def find_and_fire_hook(event_name, instance, **kwargs):
    filters = {
        "event": event_name,
        "workflow": instance.workflow,
    }
    hooks = WebHook.objects.filter(**filters)
    for hook in hooks:
        hook.deliver_hook(instance)


def decode_csv(file_obj):
    for line in file_obj:
        yield unidecode(line)


def unidecode(text):
    try:
        return text.decode("utf-8")
    except UnicodeDecodeError:
        return text.decode(cchardet.detect(text)["encoding"])


def process_filter_value(filter_value):
    if filter_value == "true":
        return True
    if filter_value == "false":
        return False
    return filter_value


def process_query_params(query_params):
    filter_mapper = [
        ("workflow__pk", "queue_id"),
        ("assigned_to__pk", "worker_id"),
        ("source__pk", "source_id"),
        ("correct", "correct"),
    ]
    filters = {}
    for filter_name, param_name in filter_mapper:
        filter_value = query_params.get(param_name)
        if filter_value:
            filters[filter_name] = process_filter_value(filter_value)
    return filters


class TaskPagination(LimitOffsetPagination):
    """
    Extended pagination class for Tasks
    """

    default_limit = 100
    max_limit = 1000

    def get_paginated_response(self, data):
        return Response(
            {
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "count": self.count,
                "tasks": data,
            },
            status=200,
        )


def create_template(template_id, user, org):
    if template_id:
        workflow = Workflow.objects.filter(
            organization=TEMPLATE_ORG_ID, pk=template_id
        ).first()
        if workflow:
            Workflow(
                name=workflow.name,
                created_by=user,
                data=copy.deepcopy(workflow.data),
                organization=org,
            ).save()
            for org_user in org.user.all():
                wfnotification = WorkflowNotification(
                    workflow=workflow, notification=org_user.notifications, enabled=True
                )
                wfnotification.save()


def get_session_duration_seconds(task):
    if task.session_started_at:
        delta_since_start = timezone.now() - task.session_started_at
        return delta_since_start / timezone.timedelta(seconds=1)

    return 0


def is_force(query_params):
    force = query_params.get("force")
    if force:
        return force.lower() == "true"
    return False


def notify_staff_run_status(data: Dict[str, Any], request: Request):
    if not "SLACK_WEBHOOK_URL" in os.environ:
        logger.warn("not sending notification, slack not configured")
        return
    try:
        status = "running" if data["is_running"] else "paused"
        text = f" set {data['name']} to {status}"
        notify_slack(text, request)
    except Exception as ex:
        sentry_sdk.capture_exception(ex)


def notify_slack(text: str, request: Request):
    if not "SLACK_WEBHOOK_URL" in os.environ:
        logger.warn("not sending notification, slack not configured")
        return
    try:
        email = request.user.email
        path = request.stream.path
        slack_url = os.getenv("SLACK_WEBHOOK_URL")
        if slack_url is None:
            sentry_sdk.capture_exception("No slack url configured!")

        r = requests.post(slack_url, json={"text": f"{email} called {path}: {text}"})
        if r.status_code != 200:
            return sentry_sdk.capture_message(
                f"Slack notification failed with status {r.status_code}"
            )
    except Exception as ex:
        sentry_sdk.capture_exception(ex)

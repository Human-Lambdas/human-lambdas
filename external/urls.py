from django.urls import path

from .views import CreateTaskView, GetExternalCompletedTaskView
from .zapier import (
    GetZapierTaskInputs,
    GetZapierWorkflows,
    ZapierAuthentication,
    ZapierCreateTask,
    ZapierHook,
)


urlpatterns = [
    path(
        "orgs/<int:org_id>/workflows/<int:workflow_id>/tasks/create",
        CreateTaskView.as_view(),
        name="create-task",
    ),
    path(
        "orgs/<int:org_id>/workflows/<int:workflow_id>/tasks/completed",
        GetExternalCompletedTaskView.as_view(),
        name="completed-task",
    ),
    # Zapier Endpoints
    path(
        "zapier/authentication",
        ZapierAuthentication.as_view(),
        name="zapier-authentication",
    ),
    path("zapier/get-workflows", GetZapierWorkflows.as_view(), name="zapier-workflows"),
    path(
        "zapier/get-task-inputs",
        GetZapierTaskInputs.as_view(),
        name="zapier-task-inputs",
    ),
    path(
        "zapier/<int:workflow_id>/create-task",
        ZapierCreateTask.as_view(),
        name="zapier-create-task",
    ),
    path("zapier/hook", ZapierHook.as_view(), name="zapier-hook",),
]

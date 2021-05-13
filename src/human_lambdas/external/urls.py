from django.urls import path

from human_lambdas.workflow_handler.flush import FlushTasksView
from human_lambdas.workflow_handler.views import (
    ExternalWorkflowView,
    ListWorkflowView,
    RUWebhookView,
)

from .views import CreateTaskView, GetExternalCompletedTaskView
from .zapier import (
    GetZapierTaskInputs,
    GetZapierTaskSampleData,
    GetZapierWorkflows,
    ZapierAuthentication,
    ZapierCreateTask,
    ZapierHook,
)

urlpatterns = [
    path(
        "orgs/<int:org_id>/queues",
        ListWorkflowView.as_view(),
        name="create-task",
    ),
    path(
        "orgs/<int:org_id>/queues/<int:queue_id>",
        ExternalWorkflowView.as_view(),
        name="list-workflows",
    ),
    path(
        "orgs/<int:org_id>/queues/<int:queue_id>/webhook",
        RUWebhookView.as_view(),
        name="webhook",
    ),
    path(
        "orgs/<int:org_id>/queues/<int:queue_id>/tasks/create",
        CreateTaskView.as_view(),
        name="create-task",
    ),
    path(
        "orgs/<int:org_id>/queues/<int:queue_id>/tasks/completed",
        GetExternalCompletedTaskView.as_view(),
        name="completed-task",
    ),
    path(
        "orgs/<int:org_id>/queues/<int:queue_id>/flush",
        FlushTasksView.as_view(),
        name="flush-task",
    ),
    # Legacy workflows terminology
    path(
        "orgs/<int:org_id>/workflows",
        ListWorkflowView.as_view(),
        name="create-task",
    ),
    path(
        "orgs/<int:org_id>/workflows/<int:workflow_id>",
        ExternalWorkflowView.as_view(),
        name="list-workflows",
    ),
    path(
        "orgs/<int:org_id>/workflows/<int:workflow_id>/webhook",
        RUWebhookView.as_view(),
        name="webhook",
    ),
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
    path(
        "orgs/<int:org_id>/workflows/<int:workflow_id>/flush",
        FlushTasksView.as_view(),
        name="flush-task",
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
    path(
        "zapier/hook",
        ZapierHook.as_view(),
        name="zapier-hook",
    ),
    path("zapier/sample-data", GetZapierTaskSampleData.as_view(), name="sample-data"),
]

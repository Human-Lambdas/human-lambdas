from django.urls import path
from external.views import CreateTaskView, GetExternalCompletedTaskView
from workflow_handler.audits import (
    AuditsGetTask,
    GetCompletedTasksCSVView,
    GetCompletedTaskView,
    ListSourcesView,
)
from workflow_handler.task_activity import ActivityView, RDActivityView
from workflow_handler.views import (
    AssignTaskView,
    CreateTaskFormView,
    CreateWorkflowView,
    FileUploadView,
    ListNonCompleteTaskView,
    ListTaskView,
    ListWorkflowView,
    NextTaskView,
    RefreshTaskView,
    RUDTaskView,
    RUDWorkflowView,
    RUWebhookView,
    SaveTaskView,
)


urlpatterns = [
    path("/create", CreateWorkflowView.as_view(), name="create-workflow"),
    path("", ListWorkflowView.as_view(), name="list-workflows"),
    path("/<int:workflow_id>", RUDWorkflowView.as_view(), name="update-workflow"),
    path("/<int:workflow_id>/upload", FileUploadView.as_view(), name="upload"),
    path("/<int:workflow_id>/tasks", ListTaskView.as_view(), name="list-tasks"),
    path(
        "/<int:workflow_id>/tasks/pending",
        ListNonCompleteTaskView.as_view(),
        name="pending-tasks",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>",
        RUDTaskView.as_view(),
        name="update-task",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/refresh",
        RefreshTaskView.as_view(),
        name="get-refresh-task",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/save",
        SaveTaskView.as_view(),
        name="save-task",
    ),
    path("/<int:workflow_id>/webhook", RUWebhookView.as_view(), name="webhook"),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/assign",
        AssignTaskView.as_view(),
        name="unassign-task",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/activity",
        ActivityView.as_view(),
        name="task-activity",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/activity/<int:pk>",
        RDActivityView.as_view(),
        name="task-activity-rd",
    ),
    path("/<int:workflow_id>/tasks/next", NextTaskView.as_view(), name="next-task"),
    path(
        "/tasks/completed",
        GetCompletedTaskView.as_view(),
        name="internal-completed-task",
    ),
    path(
        "/tasks/completed-tasks-csv",
        GetCompletedTasksCSVView.as_view(),
        name="completed-tasks-csv",
    ),
    path("/tasks/<int:task_id>/audit", AuditsGetTask.as_view(), name="audit-task",),
    path("/<int:workflow_id>/sources", ListSourcesView.as_view(), name="list-sources"),
    # temporary external API endpoints
    path(
        "/<int:workflow_id>/tasks/completed",
        GetExternalCompletedTaskView.as_view(),
        name="external-completed-task",
    ),
    path(
        "/<int:workflow_id>/tasks/create", CreateTaskView.as_view(), name="create-task",
    ),
    path(
        "/<int:workflow_id>/tasks/form",
        CreateTaskFormView.as_view(),
        name="create-task-form",
    ),
]

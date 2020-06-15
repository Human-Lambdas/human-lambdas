from django.urls import path
from workflow_handler.views import (
    CreateWorkflowView,
    RUDWorkflowView,
    ListWorkflowView,
    FileUploadView,
    ListTaskView,
    RUDTaskView,
    UnassignTaskView,
    NextTaskView,
)
from workflow_handler.audits import (
    GetCompletedTasksCSVView,
    GetCompletedTaskView,
    ListSourcesView,
)


urlpatterns = [
    path("/create", CreateWorkflowView.as_view(), name="create-workflow"),
    path("", ListWorkflowView.as_view(), name="list-workflows"),
    path("/<int:workflow_id>", RUDWorkflowView.as_view(), name="update-workflow"),
    path("/<int:workflow_id>/upload", FileUploadView.as_view(), name="upload"),
    path("/<int:workflow_id>/tasks", ListTaskView.as_view(), name="list-tasks"),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>",
        RUDTaskView.as_view(),
        name="update-task",
    ),
    path(
        "/<int:workflow_id>/tasks/<int:task_id>/unassign",
        UnassignTaskView.as_view(),
        name="unassign-task",
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
    path("/<int:workflow_id>/sources", ListSourcesView.as_view(), name="list-sources"),
]

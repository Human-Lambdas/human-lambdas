from django.urls import path

from .views import (
    CreateWorkflowView,
    RUDWorkflowView,
    ListWorkflowView,
    FileUploadView,
    ListTaskView,
    RUDTaskView,
    NextTaskView,
    CreateTaskView,
    GetCompletedTaskView,
    GetExternalCompletedTaskView,
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
    path("/<int:workflow_id>/tasks/next", NextTaskView.as_view(), name="next-task"),
    path(
        "/<int:workflow_id>/tasks/get-completed",
        GetCompletedTaskView.as_view(),
        name="completed-task",
    ),
    # External API calls
    path(
        "/<int:workflow_id>/tasks/create", CreateTaskView.as_view(), name="create-task"
    ),
    path(
        "/<int:workflow_id>/tasks/completed",
        GetExternalCompletedTaskView.as_view(),
        name="completed-task",
    ),
]

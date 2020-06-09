from django.urls import path

from external.views import CreateTaskView, GetExternalCompletedTaskView


urlpatterns = [
    path(
        "/<int:workflow_id>/tasks/create", CreateTaskView.as_view(), name="create-task"
    ),
    path(
        "/<int:workflow_id>/tasks/completed",
        GetExternalCompletedTaskView.as_view(),
        name="completed-task",
    ),
]

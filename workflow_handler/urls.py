from django.urls import path

from .views import CreateWorkflowView, RUDWorkflowView, ListWorkflowView, FileUploadView


urlpatterns = [
    path("create/", CreateWorkflowView.as_view(), name="create-workflow"),
    path("", ListWorkflowView.as_view(), name="list-workflow"),
    path("<int:pk>", RUDWorkflowView.as_view(), name="update-workflow"),
    path("<workflow_id>/upload/", FileUploadView.as_view(), name="upload"),
]

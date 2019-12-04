from django.urls import path

from .views import CreateWorkflowView, RUDWorkflowView, ListWorkflowView


urlpatterns = [
    path("create/", CreateWorkflowView.as_view(), name="create-workflow"),
    path("list/", ListWorkflowView.as_view(), name="list-workflow"),
    path("update/<int:pk>", RUDWorkflowView.as_view(), name="update-workflow"),
]

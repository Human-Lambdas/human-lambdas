from django.urls import path, include

from .views import GetOrganizationView, ListOrganizationView


urlpatterns = [
    path("", ListOrganizationView.as_view(), name="list-organization"),
    path("<int:org_id>", GetOrganizationView.as_view(), name="get-organization"),
    path("<int:org_id>/workflows/", include("workflow_handler.urls")),
]

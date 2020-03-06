from django.urls import path, include

from .views import (
    GetOrganizationView,
    ListOrganizationView,
    ListOrgUsersView,
    RetrieveUpdateRemoveUserOrgView,
    SendInviteView,
)


urlpatterns = [
    path("", ListOrganizationView.as_view(), name="list-organization"),
    path("<int:org_id>/", GetOrganizationView.as_view(), name="get-organization"),
    path(
        "<int:org_id>/users/",
        ListOrgUsersView.as_view(),
        name="list-organization-users",
    ),
    path(
        "<int:org_id>/users/<int:user_id>/",
        RetrieveUpdateRemoveUserOrgView.as_view(),
        name="remove-organization-users",
    ),
    path("<int:org_id>/workflows/", include("workflow_handler.urls")),
    path("<int:org_id>/invite/", SendInviteView.as_view(), name="send-invite"),
]

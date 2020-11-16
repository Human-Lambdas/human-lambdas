from django.urls import include, path
from organization_handler.views import (
    CreateOrganization,
    GetOrganizationView,
    ListOrganizationView,
    ListOrgUsersView,
    RetrieveUpdateRemoveUserOrgView,
)
from user_handler.invitation import SendInviteView


urlpatterns = [
    # organization
    path("", ListOrganizationView.as_view(), name="list-organization"),
    path("/create", CreateOrganization.as_view(), name="create-organization"),
    path("/<int:org_id>", GetOrganizationView.as_view(), name="get-organization"),
    # organization user management
    path(
        "/<int:org_id>/users",
        ListOrgUsersView.as_view(),
        name="list-organization-users",
    ),
    path(
        "/<int:org_id>/users/<int:user_id>",
        RetrieveUpdateRemoveUserOrgView.as_view(),
        name="remove-organization-users",
    ),
    # organization invite
    path("/<int:org_id>/invite", SendInviteView.as_view(), name="send-invite"),
    # workflows
    path("/<int:org_id>/workflows", include("v1.workflows")),
    #  metrics
    path("/<int:org_id>/metrics", include("v1.metrics"), name="metrics"),
]

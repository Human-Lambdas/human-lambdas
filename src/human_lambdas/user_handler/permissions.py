from rest_framework.permissions import BasePermission

from human_lambdas.workflow_handler.utils import STAFF_ORG_ID, TEMPLATE_ORG_ID

from .models import Organization


class IsInternalWorker(BasePermission):
    def has_permission(self, request, view):
        return (
            Organization.objects.filter(pk=STAFF_ORG_ID)
            .filter(user=request.user)
            .exists()
        )


class IsOrgAdmin(BasePermission):
    """
    Allows access only to admin users of the organization.
    """

    def has_permission(self, request, view):
        return (
            Organization.objects.filter(pk=view.kwargs["org_id"])
            .filter(admin=request.user)
            .exists()
        )


SAFE_METHODS = ["GET", "HEAD", "OPTIONS"]


class IsAuthorized(BasePermission):
    """
    The request is authenticated as a user, or is a read-only request.
    """

    def has_permission(self, request, view):
        requested_org: str = view.kwargs["org_id"]
        authoritative_orgs = Organization.objects.filter(
            pk__in=[requested_org, STAFF_ORG_ID]
        )

        if request.method in SAFE_METHODS or "/tasks/" in request.path:
            if view.kwargs["org_id"] == TEMPLATE_ORG_ID:
                return True

            return authoritative_orgs.filter(user=request.user).exists()

        return authoritative_orgs.filter(admin=request.user).exists()

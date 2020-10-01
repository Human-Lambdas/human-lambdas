from rest_framework.permissions import BasePermission

from .models import Organization


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


class IsAuthenticatedOrReadOnlyAdmin(BasePermission):
    """
    The request is authenticated as a user, or is a read-only request.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS or (
            Organization.objects.filter(pk=view.kwargs["org_id"])
            .filter(admin=request.user)
            .exists()
        ):
            return True
        return False

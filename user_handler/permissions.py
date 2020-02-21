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

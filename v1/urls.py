from django.urls import path, include

urlpatterns = [
    path("users", include("v1.users")),
    path("orgs", include("v1.orgs")),
    path("external", include("v1.external")),
    # path("audits", include("v1.audits")),
]

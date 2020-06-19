from django.urls import path, include

urlpatterns = [
    path("users", include("v1.users")),
    path("orgs", include("v1.orgs")),
]

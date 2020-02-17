from django.urls import path, include

urlpatterns = [
    path("users/", include("user_handler.urls")),
    path("orgs/", include("user_handler.org_urls")),
]

from django.urls import include, path


urlpatterns = [
    path("/users", include("v1.users")),
    path("/orgs", include("v1.orgs")),
]

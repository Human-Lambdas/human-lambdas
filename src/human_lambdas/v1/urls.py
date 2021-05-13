from django.urls import include, path

urlpatterns = [
    path("/users", include("human_lambdas.v1.users")),
    path("/orgs", include("human_lambdas.v1.orgs")),
    path("/templates", include("human_lambdas.v1.templates")),
]

from django.urls import path, include

urlpatterns = [
    path("users/", include("user_handler.urls")),
    path("workflows/", include("workflow_handler.urls")),
]

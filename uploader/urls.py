from django.urls import path

from .views import UploadView


urlpatterns = [
    path("", UploadView.as_view(), name="upload"),
]

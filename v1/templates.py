from django.urls import path

from templates_handler.views import TemplatesView

urlpatterns = [
    path("", TemplatesView.as_view(), name="templates"),
]

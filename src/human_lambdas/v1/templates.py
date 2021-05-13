from django.urls import path

from human_lambdas.templates_handler.views import TemplatesView

urlpatterns = [
    path("", TemplatesView.as_view(), name="templates"),
]

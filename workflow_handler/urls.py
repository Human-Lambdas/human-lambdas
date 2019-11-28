from django.urls import path

from .views import CreateWorkflowView


urlpatterns = [
    path('create/', CreateWorkflowView.as_view(), name='user-registration'),
]
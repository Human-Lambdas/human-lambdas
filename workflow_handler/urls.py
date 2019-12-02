from django.urls import path

from .views import CreateWorkflowView, RUDWorkflowView


urlpatterns = [
    path('create/', CreateWorkflowView.as_view(), name='create-workflow'),
    path('edit/<int:pk>/', RUDWorkflowView.as_view(), name='edit-workflow')
]
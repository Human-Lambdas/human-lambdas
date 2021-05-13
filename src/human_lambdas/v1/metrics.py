from django.urls import path

from human_lambdas.metrics.views import (
    OrganizationMetrics,
    WorkerMetrics,
    WorkflowMetrics,
)

urlpatterns = [
    path("", OrganizationMetrics.as_view(), name="org-metrics"),
    path(
        "/workflows",
        WorkflowMetrics.as_view(),
        name="workflow-metrics",
    ),
    path(
        "/queues",
        WorkflowMetrics.as_view(),
        name="workflow-metrics",
    ),
    path("/workers", WorkerMetrics.as_view(), name="worker-metrics"),
]

from django.urls import path, include

from metrics.views import OrganizationMetrics, WorkflowMetrics, WorkerMetrics


urlpatterns = [
    path("", OrganizationMetrics.as_view(), name="org-metrics"),
    path(
        "/workflows",
        WorkflowMetrics.as_view(),
        name="workflow-metrics",
    ),
    path(
        "/workers", WorkerMetrics.as_view(), name="worker-metrics"
    ),
]
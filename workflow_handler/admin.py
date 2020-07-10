from django.contrib import admin

from .models import Workflow, Task, WorkflowNotification


admin.site.register(Workflow)
admin.site.register(Task)
admin.site.register(WorkflowNotification)

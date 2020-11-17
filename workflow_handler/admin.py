from django.contrib import admin

from .models import Task, TaskActivity, Workflow, WorkflowNotification

admin.site.register(Workflow)
admin.site.register(Task)
admin.site.register(TaskActivity)
admin.site.register(WorkflowNotification)

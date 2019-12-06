from django.contrib import admin

from .models import Workflow, Task


admin.site.register(Workflow)
admin.site.register(Task)

from django.contrib import admin
from .models import Workflow, Task
# Register your models here.

admin.site.register(Workflow)
admin.site.register(Task)
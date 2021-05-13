from django.contrib import admin

from .models import (
    ForgottenPassword,
    Invitation,
    Notification,
    Organization,
    User,
)

# Register your models here.

admin.site.register(User)
admin.site.register(Organization)
admin.site.register(Invitation)
admin.site.register(ForgottenPassword)
admin.site.register(Notification)

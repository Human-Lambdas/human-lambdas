from django.contrib import admin

from .models import User, Organization, Invitation, ForgottenPassword, Notification

# Register your models here.

admin.site.register(User)
admin.site.register(Organization)
admin.site.register(Invitation)
admin.site.register(ForgottenPassword)
admin.site.register(Notification)

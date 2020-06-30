from django.core.management.base import BaseCommand
from user_handler.models import User, Notification
from workflow_handler.models import WorkflowNotification


class Command(BaseCommand):
    help = "Add notification object to each user"

    def handle(self, *args, **options):
        users = User.objects.all()
        for user in users:
            if not user.notifications:
                notification = Notification()
                notification.save()
                user.notifications = notification
                user.save()
                for org in user.organization_set.all():
                    for workflow in org.workflow_set.all():
                        WorkflowNotification(
                            workflow=workflow, enabled=True, notification=notification
                        )
                self.stdout.write(
                    self.style.SUCCESS(
                        "Enabled all workflow notifications for user %s" % user.pk
                    )
                )
            else:
                self.stdout.write(
                    self.style.SUCCESS(
                        "Notification alredy exists for user %s" % user.pk
                    )
                )

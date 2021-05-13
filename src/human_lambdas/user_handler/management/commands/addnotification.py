from django.core.management.base import BaseCommand

from human_lambdas.user_handler.models import Notification, User
from human_lambdas.workflow_handler.models import WorkflowNotification


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
                    if not WorkflowNotification.objects.filter(
                        workflow=workflow, notification=user.notifications
                    ).exists():
                        WorkflowNotification(
                            workflow=workflow,
                            enabled=True,
                            notification=user.notifications,
                        ).save()
            self.stdout.write(
                self.style.SUCCESS(
                    "Set-up all workflow notifications for user %s" % user.pk
                )
            )

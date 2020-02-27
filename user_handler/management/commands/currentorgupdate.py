from django.core.management.base import BaseCommand
from user_handler.models import User, Organization


class Command(BaseCommand):
    help = "Updates the task count"

    def handle(self, *args, **options):
        users = User.objects.all()
        for user in users:
            user.current_organization_id = (
                Organization.objects.filter(user=user).first().pk
            )
            user.save()
            self.stdout.write(
                self.style.SUCCESS(
                    'Successfully updated current organization id for user "%s"'
                    % user.pk
                )
            )

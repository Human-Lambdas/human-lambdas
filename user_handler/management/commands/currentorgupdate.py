from django.core.management.base import BaseCommand
from user_handler.models import User, Organization


class Command(BaseCommand):
    help = "Updates the task count"

    def handle(self, *args, **options):
        users = User.objects.all()
        for user in users:
            org = Organization.objects.filter(user=user).first()
            if not org:
                self.stdout.write(
                    self.style.SUCCESS(
                        'No organization was found for user "%s" with the user id "%s"'
                        % user.email,
                        user.pk,
                    )
                )
            else:
                user.current_organization_id = org.pk
                user.save()
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully updated current organization id for user "%s"'
                        % user.pk
                    )
                )

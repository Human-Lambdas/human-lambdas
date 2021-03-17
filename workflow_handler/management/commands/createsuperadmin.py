from typing import Any, Dict, List

from django.core.management.base import BaseCommand, CommandParser

from user_handler.models import Organization, User
from workflow_handler.utils import TEMPLATE_ORG_ID


class Command(BaseCommand):
    def add_arguments(self, parser: CommandParser):
        parser.add_argument("emails", nargs="+", type=str)

    def handle(self, *_: List[str], **options: Dict[str, Any]):
        if "emails" not in options:
            self.stdout.write(
                self.style.ERROR("invalid inputs, expected 1 or more email addresses")
            )
            return

        templates_org, _created = Organization.objects.get_or_create(
            id=TEMPLATE_ORG_ID, name="templates"
        )
        templates_org.save()

        for email in options["emails"]:
            user = User.objects.get(email=email)
            templates_org.add_admin(user)

        self.stdout.write(
            self.style.SUCCESS(
                f"Added super admins {options['emails']} to org {TEMPLATE_ORG_ID}"
            )
        )

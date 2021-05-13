from typing import Any, Dict, List

from django.core.management.base import BaseCommand, CommandParser

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.utils import STAFF_ORG_ID


class Command(BaseCommand):
    def add_arguments(self, parser: CommandParser):
        parser.add_argument("emails", nargs="+", type=str)

    def handle(self, *_: List[str], **options: Dict[str, Any]):
        if "emails" not in options:
            self.stdout.write(
                self.style.ERROR("invalid inputs, expected 1 or more email addresses")
            )
            return

        if not Organization.objects.filter(pk=STAFF_ORG_ID).exists():
            Organization(id=STAFF_ORG_ID, name="staff").save()

        templates_org = Organization.objects.get(pk=STAFF_ORG_ID)

        for email in options["emails"]:
            user = User.objects.get(email=email)
            templates_org.add_admin(user)

        self.stdout.write(
            self.style.SUCCESS(
                f"Added super admins {options['emails']} to org {STAFF_ORG_ID}"
            )
        )

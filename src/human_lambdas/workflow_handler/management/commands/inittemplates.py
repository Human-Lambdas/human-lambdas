from subprocess import check_output

from django.core.management.base import BaseCommand

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Workflow
from human_lambdas.workflow_handler.tests.constants import WORKFLOW_DATA
from human_lambdas.workflow_handler.utils import TEMPLATE_ORG_ID


class Command(BaseCommand):
    help = "NOT FOR PROD: Sets up template org in the DB"

    def handle(self, *args, **options):

        check_output("dev_tools/get-templates > templates.json", shell=True)

        templates_org = Organization(id=TEMPLATE_ORG_ID, name="templates")
        templates_org.save()
        admin_id = 999

        try:
            user = User.objects.get(id=admin_id)
        except User.DoesNotExist:
            user = User(id=admin_id, name="template_admin", email="templates@_.com")
            user.save()
            templates_org.user.add(user)

        Workflow(
            data=WORKFLOW_DATA,
            name="template1",
            created_by=user,
            organization=templates_org,
        ).save()

        self.stdout.write(self.style.SUCCESS("Done"))

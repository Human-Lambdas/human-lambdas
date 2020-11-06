from django.core.management.base import BaseCommand

from workflow_handler.data_mapping import migrate_data
from workflow_handler.models import Workflow


class Command(BaseCommand):
    help = "migrates inputs and outputs to data"

    def handle(self, *args, **options):
        workflows = Workflow.objects.all()
        for workflow in workflows:
            migrate_data(workflow)
            self.stdout.write(
                self.style.SUCCESS(
                    'Successfully migrated inputs and outputs to data for workflow "%s"'
                    % workflow.id
                )
            )

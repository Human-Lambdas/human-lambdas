import uuid

from django.core.management.base import BaseCommand

from human_lambdas.workflow_handler.models import Workflow


class Command(BaseCommand):
    help = "Rename the disabled workflows"

    def handle(self, *args, **options):
        workflows = Workflow.objects.filter(disabled=True).all()
        for workflow in workflows:
            wf_name = workflow.name
            workflow.name = f"{wf_name}-{uuid.uuid4()}"
            workflow.save()
            self.stdout.write(
                self.style.SUCCESS('Successfully renamed workflow "%s"' % workflow.id)
            )

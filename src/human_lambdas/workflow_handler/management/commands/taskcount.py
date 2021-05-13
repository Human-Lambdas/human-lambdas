from django.core.management.base import BaseCommand
from django.db.models import Q

from human_lambdas.workflow_handler.models import Task, Workflow


class Command(BaseCommand):
    help = "Updates the task count"

    def handle(self, *args, **options):
        workflows = Workflow.objects.all()
        for workflow in workflows:
            workflow.n_tasks = (
                Task.objects.defer("data")
                .filter(workflow=workflow)
                .filter(~Q(status="completed"))
                .count()
            )
            workflow.save()
            self.stdout.write(
                self.style.SUCCESS(
                    'Successfully updated task count for workflow "%s"' % workflow.id
                )
            )

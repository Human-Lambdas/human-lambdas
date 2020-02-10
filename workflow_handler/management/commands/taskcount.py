from django.core.management.base import BaseCommand
from workflow_handler.models import Workflow, Task


class Command(BaseCommand):
    help = 'Updates the task count'

    def handle(self, *args, **options):
        workflows = Workflow.objects.all()
        for workflow in workflows:
            workflow.n_tasks = Task.objects.filter(workflow=workflow).filter(status="pending").count()
            workflow.save()
            self.stdout.write(self.style.SUCCESS('Successfully updated task count for workflow "%s"' % workflow.id))
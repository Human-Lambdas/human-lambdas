from django.core.management.base import BaseCommand

from human_lambdas.workflow_handler.models import Workflow


class Command(BaseCommand):
    help = "Rename the workflows with same names"

    def handle(self, *args, **options):
        workflows = Workflow.objects.all()
        for workflow in workflows:
            wf_name = workflow.name
            n_wf_names = Workflow.objects.filter(name=wf_name).count()
            if n_wf_names > 1:
                workflow.name = f"{wf_name}-{n_wf_names}"
                workflow.save()
                self.stdout.write(
                    self.style.SUCCESS(
                        'Successfully renamed workflow "%s"' % workflow.id
                    )
                )

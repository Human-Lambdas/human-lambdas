# Generated by Django 2.2.10 on 2020-08-12 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0020_workflownotification_last_notified"),
    ]

    operations = [
        migrations.AddField(
            model_name="workflow",
            name="hook_id",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name="WorkflowHook",
        ),
    ]

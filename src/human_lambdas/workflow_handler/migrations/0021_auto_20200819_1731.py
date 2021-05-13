# Generated by Django 2.2.10 on 2020-08-19 17:31

from django.db import migrations

import human_lambdas.workflow_handler.fields


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0020_workflownotification_last_notified"),
    ]

    operations = [
        migrations.AddField(
            model_name="task",
            name="data",
            field=human_lambdas.workflow_handler.fields.JSONField(
                blank=True, default=[]
            ),
        ),
        migrations.AddField(
            model_name="workflow",
            name="data",
            field=human_lambdas.workflow_handler.fields.JSONField(
                blank=True, default=[]
            ),
        ),
    ]
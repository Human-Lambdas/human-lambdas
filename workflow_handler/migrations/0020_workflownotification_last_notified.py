# Generated by Django 2.2.10 on 2020-06-26 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0019_workflownotification"),
    ]

    operations = [
        migrations.AddField(
            model_name="workflownotification",
            name="last_notified",
            field=models.DateTimeField(null=True),
        ),
    ]

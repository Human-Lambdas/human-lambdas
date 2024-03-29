# Generated by Django 2.2.13 on 2021-03-19 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0034_task_region"),
    ]

    operations = [
        migrations.AddField(
            model_name="workflow",
            name="guidelines_url",
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name="workflow",
            name="is_running",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="workflow",
            name="task_description",
            field=models.TextField(null=True),
        ),
    ]

# Generated by Django 2.2.5 on 2019-12-16 18:41

from django.db import migrations, models

import human_lambdas.workflow_handler.fields


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0003_auto_20191119_1457"),
    ]

    operations = [
        migrations.AddField(
            model_name="task",
            name="created_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="task",
            name="output_data",
            field=human_lambdas.workflow_handler.fields.JSONField(null=True),
        ),
    ]

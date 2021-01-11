# Generated by Django 2.2.5 on 2019-11-19 14:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0002_auto_20191119_1457"),
    ]

    operations = [
        migrations.AlterField(
            model_name="task",
            name="completed",
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name="task",
            name="completed_by",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="user_handler.User",
            ),
        ),
    ]

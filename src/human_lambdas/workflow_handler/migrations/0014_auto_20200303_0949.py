# Generated by Django 2.2.5 on 2020-03-03 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0013_workflowhook"),
    ]

    operations = [
        migrations.AlterField(
            model_name="task",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="workflow",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]

# Generated by Django 2.2.13 on 2021-03-01 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0033_remove_workflow_description"),
    ]

    operations = [
        migrations.AddField(
            model_name="task",
            name="region",
            field=models.CharField(max_length=128, null=True),
        ),
    ]
# Generated by Django 2.2.13 on 2020-10-21 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0027_auto_20200918_1421"),
    ]

    operations = [
        migrations.AlterField(
            model_name="task",
            name="status",
            field=models.CharField(default="new", max_length=128),
        ),
    ]

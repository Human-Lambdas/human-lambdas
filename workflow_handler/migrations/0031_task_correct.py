# Generated by Django 2.2.13 on 2020-11-05 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workflow_handler", "0030_auto_20201103_1718"),
    ]

    operations = [
        migrations.AddField(
            model_name="task",
            name="correct",
            field=models.BooleanField(null=True),
        ),
    ]

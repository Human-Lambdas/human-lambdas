# Generated by Django 2.2.5 on 2020-01-09 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workflow_handler', '0007_auto_20191230_2026'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='disabled',
            field=models.BooleanField(default=False),
        ),
    ]

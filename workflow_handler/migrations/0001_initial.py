# Generated by Django 2.2.5 on 2019-11-18 17:46

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("user_handler", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Workflow",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128)),
                ("description", models.TextField()),
                ("inputs", django.contrib.postgres.fields.jsonb.JSONField()),
                ("outputs", django.contrib.postgres.fields.jsonb.JSONField()),
                ("created_at", models.DateTimeField(auto_now=True)),
                (
                    "created_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user_handler.User",
                    ),
                ),
                (
                    "organization",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user_handler.Organization",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128)),
                ("completed", models.DateTimeField(null=True)),
                ("input_data", django.contrib.postgres.fields.jsonb.JSONField()),
                ("output_data", django.contrib.postgres.fields.jsonb.JSONField()),
                (
                    "completed_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user_handler.User",
                    ),
                ),
                (
                    "workflow",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="workflow_handler.Workflow",
                    ),
                ),
            ],
        ),
    ]

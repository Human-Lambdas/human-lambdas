# Generated by Django 2.2.13 on 2021-06-09 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user_handler", "0013_remove_notification_last_notified"),
    ]

    operations = [
        migrations.AddField(
            model_name="invitation",
            name="invite_link",
            field=models.TextField(null=True),
        ),
    ]

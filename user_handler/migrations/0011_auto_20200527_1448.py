# Generated by Django 2.2.10 on 2020-05-27 14:48

from django.db import migrations
import user_handler.models


class Migration(migrations.Migration):

    dependencies = [
        ("user_handler", "0010_invitation_admin"),
    ]

    operations = [
        migrations.AlterField(
            model_name="forgottenpassword",
            name="email",
            field=user_handler.models.LowercaseEmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name="invitation",
            name="email",
            field=user_handler.models.LowercaseEmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=user_handler.models.LowercaseEmailField(max_length=254, unique=True),
        ),
    ]
# Generated by Django 2.2.5 on 2020-02-13 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user_handler", "0006_auto_20200213_1529"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="is_superuser",
            field=models.BooleanField(default=False),
        ),
    ]

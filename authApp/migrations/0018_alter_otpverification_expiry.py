# Generated by Django 4.1.13 on 2024-04-01 13:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authApp", "0017_remove_profile_user_alter_otpverification_expiry"),
    ]

    operations = [
        migrations.AlterField(
            model_name="otpverification",
            name="expiry",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2024, 4, 1, 13, 37, 26, 589159, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]

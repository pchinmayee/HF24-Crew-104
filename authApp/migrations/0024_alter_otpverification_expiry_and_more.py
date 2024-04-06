# Generated by Django 4.1.13 on 2024-04-01 15:11

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("authApp", "0023_remove_profile_user_alter_otpverification_expiry"),
    ]

    operations = [
        migrations.AlterField(
            model_name="otpverification",
            name="expiry",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2024, 4, 1, 15, 16, 42, 973261, tzinfo=datetime.timezone.utc
                )
            ),
        ),
        migrations.AlterField(
            model_name="otpverification",
            name="user",
            field=models.ForeignKey(
                default=" ",
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
            preserve_default=False,
        ),
    ]
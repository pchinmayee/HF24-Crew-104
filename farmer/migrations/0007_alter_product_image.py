# Generated by Django 4.2.11 on 2024-04-05 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("farmer", "0006_delete_farmerorders"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="images/"),
        ),
    ]

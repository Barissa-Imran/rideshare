# Generated by Django 4.1.2 on 2022-11-19 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental', '0005_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rental',
            name='paid',
            field=models.BooleanField(default=True),
        ),
    ]

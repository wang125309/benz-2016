# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-31 07:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='service',
        ),
        migrations.AddField(
            model_name='user',
            name='service_name',
            field=models.CharField(max_length=256, null=True),
        ),
    ]

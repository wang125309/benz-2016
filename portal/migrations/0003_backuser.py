# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-31 11:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0002_auto_20160331_0702'),
    ]

    operations = [
        migrations.CreateModel(
            name='BackUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_name', models.CharField(max_length=256, null=True)),
                ('password', models.CharField(max_length=64, null=True)),
            ],
        ),
    ]

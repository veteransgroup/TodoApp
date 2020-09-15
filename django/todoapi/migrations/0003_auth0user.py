# Generated by Django 2.2 on 2020-09-10 05:47
from django.db import migrations
from django.conf import settings

def create_data(apps, schema_editor):
    User = apps.get_model(settings.AUTH_USER_MODEL)
    user = User(pk=1, username="auth0user", is_active=True , email="myemail@someprovider.com")
    user.save()


class Migration(migrations.Migration):

    dependencies = [
        ('todoapi', '0002_dummy_tasks'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
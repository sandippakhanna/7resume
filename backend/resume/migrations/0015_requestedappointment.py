# Generated by Django 4.0.2 on 2022-03-09 14:05

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0014_alter_appointment_friday_end_time_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='RequestedAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(db_index=True, default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('subject', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=200)),
                ('phone', models.CharField(max_length=20)),
                ('appointment_time', models.DateTimeField()),
                ('message', models.TextField()),
                ('user_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requested_appointments', to='resume.userprofile')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
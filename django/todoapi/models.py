from django.db import models
from datetime import date
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver

# Create the Task class to describe the model.
class Task(models.Model):
    """Stores a task."""
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=50)
    attachment = models.FileField(blank=True, null=True, upload_to='%Y/%m/')

    # Date the task was created.
    created_on = models.DateField(default=date.today)

    # Due date.
    due_date = models.DateField(default=date.today)

    created_by = models.CharField(max_length=100)

    # Meta data about the database table.
    class Meta:
        # Set the table name.
        db_table = 'task'

        # Set default ordering
        ordering = ['-id']

    # Define what to output when the model is printed as a string.
    def __str__(self):
        return self.title

@receiver(pre_delete, sender=Task)
def picture_delete(sender, instance, **kwargs):
    instance.attachment.delete(False)
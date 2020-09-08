from .models import Task
from .serializers import TaskSerializer

from rest_framework import viewsets


# class TaskList(generics.ListCreateAPIView):
#     """
#     View all tasks.
#     """
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer


# class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
#     """
#     Returns a single Task and allows updates and deletion of a Task.
#     """
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     lookup_url_kwarg = 'task_id'

class TaskViewSet(viewsets.ModelViewSet):
    """
    View all tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    # def perform_create(self, serializer, format=None):
    #     attachment = self.request.data.get('attachment', False)
    #     if attachment:
    #         serializer.save(
    #             title=serializer.validated_data.get('title'),
    #             content=serializer.validated_data.get('content'),
    #             attachment=attachment
    #         )
    #     else:
    #         serializer.save(
    #             title=serializer.validated_data.get('title'),
    #             content=serializer.validated_data.get('content')
    #         )
        
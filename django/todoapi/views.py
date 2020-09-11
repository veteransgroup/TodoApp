from .models import Task
from .serializers import TaskSerializer
from .utils import getUserFromToken
from rest_framework import viewsets, permissions
from .permissions import IsCreator


class TaskViewSet(viewsets.ModelViewSet):
    """
    View all tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsCreator]

    def perform_create(self, serializer):        
        serializer.save(created_by=getUserFromToken(self.request))
        
    def get_queryset(self):
        return self.queryset.filter(created_by=getUserFromToken(self.request))
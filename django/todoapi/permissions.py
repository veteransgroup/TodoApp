from rest_framework import permissions
from django.conf import settings
from .utils import getUserFromToken

class IsCreator(permissions.BasePermission):
    """
    Object-level permission to only allow creators of an object to edit it.
    """
    message = 'You must be the creator of this object.'

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.created_by == getUserFromToken(request)
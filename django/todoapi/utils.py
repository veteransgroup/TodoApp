from rest_framework_jwt.utils import jwt_decode_handler

def getUserFromToken(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split()[1]
    payload = jwt_decode_handler(token)
    return payload.get('sub')
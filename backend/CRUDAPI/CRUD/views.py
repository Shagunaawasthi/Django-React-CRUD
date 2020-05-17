# Crud/views.py
from rest_framework import viewsets  # add this
from .serializers import PostSerializer  # add this
from .models import Post  # add this


class PostView(viewsets.ModelViewSet):  # add this
    serializer_class = PostSerializer  # add this
    queryset = Post.objects.all()  # add this
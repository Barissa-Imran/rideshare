from django.shortcuts import render
from .models import Rental
from rest_framework import  permissions, viewsets
from .serializers import RentalSerializer


class RentalView(viewsets.ReadOnlyModelViewSet):
    lookup_field = 'id'
    lookup_url_kwarg = 'rental_id'
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = RentalSerializer

    def get_queryset(self):
        user = self.request.user


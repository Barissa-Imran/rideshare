from django.shortcuts import render
from .models import Rental, Email
from rest_framework import  permissions, viewsets
from .serializers import RentalSerializer , EmailSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse


class RentalView(viewsets.ReadOnlyModelViewSet):
    lookup_field = 'id'
    lookup_url_kwarg = 'rental_id'
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = RentalSerializer

    def get_queryset(self):
        user = self.request.user

def email(request):
   
    if request.method == "POST":
        subject = "Asap Cab Services"
        message ="Hi, Thankyou for renting a car from us, You'll be updated on how to get the car"
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [EmailSerializer.email,]
        send_mail(subject, message, email_from, recipient_list)
        return HttpResponse("Email Sent")
    return HttpResponse("Rent Car by Submitting your email")
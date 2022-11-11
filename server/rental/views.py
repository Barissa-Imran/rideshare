from django.shortcuts import render
from .models import Rental, Email
from rest_framework import  generics, permissions, viewsets, status
from .serializers import RentalSerializer , EmailSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response


class RentalView(APIView):
    serializer_class = RentalSerializer
    permission_classes = (permissions.IsAuthenticated,)
     
    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.data.get('email')
            car_model = serializer.data.get('car_model')
            pickup_location = serializer.data.get('pickup_location')
            from_date = serializer.data.get('from_date')
            to_date = serializer.data.get('to_date')

            queryset = Rental.objects.filter(email=email)

            if queryset.exists():
                rental = queryset[0]
                rental.email = email
                rental.car_model = car_model
                rental.pickup_location= pickup_location
                rental.from_date = from_date
                rental.to_date = to_date
                rental.save(update_fields=['email', 'car_model','pickup_location','from_date','to_date'])
                return Response(RentalSerializer(rental).data, status=status.HTTP_200_OK)
            else:
                rental = Rental(email=email,car_model=car_model,pickup_location=pickup_location,
                from_date=from_date,to_date=to_date)
                rental.save()
                return Response(RentalSerializer(rental).data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class RentalView(APIView):
#     serializer_class = RentalSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#     def post(self, request, format=None):
#         serializer = self.serializer_class(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def email(request):
   
    if request.method == "POST":
        subject = "Asap Cab Services"
        message ="Hi, Thankyou for renting a car from us, You'll be updated on how to get the car"
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [EmailSerializer.email,]
        send_mail(subject, message, email_from, recipient_list)
        return HttpResponse("Email Sent")
    return HttpResponse("Rent Car by Submitting your email")
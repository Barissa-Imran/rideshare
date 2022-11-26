from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import generics, permissions, viewsets
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import stripe

from .models import Trip
from .serializers import LogInSerializer, TripSerializer, UserSerializer


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer

class TripView(APIView):
    """
    List all Trips, or create a new trip.
    """
    def get(self, request, format=None):
        print(request.data)
        trips = Trip.objects.all()
        serializer = TripSerializer(trips, many=True)
        return Response(serializer.data)

    def post(self, request, format=None, *args, **kwargs):
        serializer = TripSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StripeCheckoutView(APIView):
    def post(self, request):
        data = request.data
        # multiply price by 100 because stripe requires the value be in cents.
        price = float(request.data['price'])
        stripe_price = int(price * 100)

        print(stripe_price)
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price_data': {
                            'unit_amount': stripe_price,
                            'currency' : 'usd',
                            'product_data': {
                                'name': 'Trip'
                            },
                        },
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=settings.SITE_URL + '/rideshare',
                cancel_url=settings.SITE_URL + '/cancel',
            )

            return Response(checkout_session.url,)
        except Exception as e:
            return Response(
                {'error': 'Something went wrong while creating stripe checkout session'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

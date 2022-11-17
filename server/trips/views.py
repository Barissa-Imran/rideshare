from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import generics, permissions, viewsets
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Trip
from .serializers import LogInSerializer, TripSerializer, UserSerializer


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer


# class TripView(viewsets.ReadOnlyModelViewSet):
#     lookup_field = 'id'
#     lookup_url_kwarg = 'trip_id'
#     permission_classes = (permissions.IsAuthenticated,)
#     serializer_class = NestedTripSerializer

#     def get_queryset(self):
#         user = self.request.user
#         if user.group == 'driver':
#             return Trip.objects.filter(
#                 Q(status=Trip.REQUESTED) | Q(driver=user)
#             )
#         if user.group == 'rider':
#             return Trip.objects.filter(rider=user)
#         return Trip.objects.none()

class TripView(APIView):
    """
    List all Trips, or create a new trip.
    """
    def get(self, request, format=None):
        trips = Trip.objects.all()
        serializer = TripSerializer(trips, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TripSerializer
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.urls import path

from .views import TripView, StripeCheckoutView

app_name = 'taxi'

urlpatterns = [
    path('', TripView.as_view(), name='trip_list'),
    path('<int:user_id>/', TripView.as_view(), name='trip_user'),
    path('payment/', StripeCheckoutView.as_view(), name='stripe_checkout'),
    path('<uuid:trip_id>/', TripView.as_view(), name='trip_detail'),
]

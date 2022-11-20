from django.urls import path

from .views import RentalView, EmailView, StripeCheckouView


app_name = 'cabs'

urlpatterns = [
    path('email/', EmailView.as_view(), name='email'),
    path('', RentalView.as_view(), name='rental_list'),
    path('<uuid:rental_id>/',
         RentalView.as_view(), name='rental_detail'),
    path(r'stripe/create-stripe-checkout-session', StripeCheckouView.as_view()),
]

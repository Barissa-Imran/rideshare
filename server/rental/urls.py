from django.urls import path

from .views import RentalView

app_name = 'cabs'

urlpatterns = [
    path('', RentalView.as_view({'get': 'list'}), name='rental_list'),
    path('<uuid:rental_id>/', RentalView.as_view({'get': 'retrieve'}), name='rental_detail'),  
]

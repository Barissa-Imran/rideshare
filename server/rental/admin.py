from django.contrib import admin
from .models import Rental, Email
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin


@admin.register(Rental)
class RentalAdmin(admin.ModelAdmin):
    fields = (
        'id', 'user', 'car_model', 'pickup_location',
        'from_date',
        'to_date', 'paid', 'created', 'updated',
    )
    list_display = (
        'id', 'user', 'car_model', 'pickup_location',
        'from_date',
        'to_date', 'paid', 'created', 'updated',)
    list_filter = (
        'created',
    )
    readonly_fields = (
        'id', 'created', 'updated',
    )


@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    fields = (
        'name',
        'email',
        'message',
        'created',
    )
    list_filter = (
        'created',
    )
    readonly_fields = (
        'name',
        'created',
        'email',
        'message',
    )

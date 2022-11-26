from django.db import models
from trips.models import User
import uuid

# password reset config
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail

mail = "You are receiving this email because you have applied for password reset at Asap Car services"
host = 'http://localhost:3000'

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}. Go to: {}{}/token={}".format(mail, host,
        "/reset-password-confirm", reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Asap Cab Services"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@asapcabservices.com",
        # to:
        [reset_password_token.user.email]
    )

#-----------------

class Rental(models.Model):
    TeslaMalibu = 'Tesla Malibu'
    ToyotaAventador = 'Toyota Aventador'
    BMWX3 = 'BMWX3'
    NissanMercielago = 'Nissan Mercielago'
    FerrariCamry = 'Ferrari Camry'
    MercedesBenzXC90= 'Mercedes Benz XC90'

    STATUSES = (
        (TeslaMalibu, TeslaMalibu),
        (ToyotaAventador,ToyotaAventador),
        (BMWX3, BMWX3),
        (NissanMercielago, NissanMercielago),
        (FerrariCamry,FerrariCamry),
        (MercedesBenzXC90,MercedesBenzXC90)
    )


    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    car_model = models.CharField(max_length = 100,  choices=STATUSES)
    pickup_location = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    from_date = models.DateTimeField()
    to_date = models.DateTimeField()
    paid = models.BooleanField(default=True)

def __str__(self):
    return "{}".format(self.user)


class Email(models.Model):
    name = models.CharField(max_length=254, default="name")
    email = models.EmailField(max_length=254)
    message = models.TextField(default="message")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.email)

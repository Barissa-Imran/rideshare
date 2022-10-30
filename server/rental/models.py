from django.db import models
from trips.models import User
import uuid

class Rental(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    car_model = models.CharField(max_length = 5)
    pickup_location = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    from_date = models.DateTimeField()
    to_date = models.DateTimeField()
    paid = models.BooleanField()
 
def __str__(self):
    return "{}".format(self.user)

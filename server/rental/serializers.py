from rest_framework import serializers
from .models import Rental, Email


class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'
        read_only_fields = ('id', 'created', 'updated',)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Rental.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing Trip
        """
        # instance.car_model = validated_data.get(
        #     'car_model', instance.car_model)
        instance.pickup_location = validated_data.get(
            'pickup_location', instance.pickup_location)
        return instance

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'

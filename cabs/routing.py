from django.core.asgi import get_asgi_application
from django.urls import path

from channels.routing import ProtocolTypeRouter, URLRouter

from cabs.middleware import TokenAuthMiddlewareStack
from trips.consumers import CabsConsumer

application = ProtocolTypeRouter({
    'http': get_asgi_application(),

    'websocket': TokenAuthMiddlewareStack(
        URLRouter([
            path('cabs/', CabsConsumer.as_asgi()),
        ])
    ),
})

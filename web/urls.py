from django.urls import path
from .views import *

urlpatterns = [
    path(''  ,  home.as_view(), name = 'home'),
    path('combustible/'  ,  combustible.as_view(), name = 'combustible'),
    path('mapa'  ,  mapa.as_view(), name = 'mapa'),
]

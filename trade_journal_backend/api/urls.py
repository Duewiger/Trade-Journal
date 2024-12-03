from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from accounts.views import TestView  # example view

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # path("custom-endpoint/", TestView.as_view(), name="custom_endpoint"),
]
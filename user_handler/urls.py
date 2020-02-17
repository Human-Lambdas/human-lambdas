from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    RegistrationView,
    HelloView,
    RetrieveUpdateUserView,
    APIAuthToken,
)


urlpatterns = [
    path("register/", RegistrationView.as_view(), name="user-registration"),
    path("token/", jwt_views.TokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token-refresh"),
    path("hello/", HelloView.as_view(), name="hello"),
    path("<int:pk>", RetrieveUpdateUserView.as_view(), name="update-user"),
    path("api-token/", APIAuthToken.as_view(), name="api-token"),
]

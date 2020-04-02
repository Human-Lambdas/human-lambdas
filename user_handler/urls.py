from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .jwt_token import HLTokenObtainPairView
from .views import (
    RegistrationView,
    HelloView,
    InvitationView,
    RetrieveUpdateUserView,
    APIAuthToken,
    SendForgottenPasswordView,
    ForgottenPasswordView,
)


urlpatterns = [
    path("/register", RegistrationView.as_view(), name="user-registration"),
    path("/token", HLTokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("/token/refresh", TokenRefreshView.as_view(), name="token-refresh"),
    path("/hello", HelloView.as_view(), name="hello"),
    path(
        "/forgotten-password",
        SendForgottenPasswordView.as_view(),
        name="forgotten-password",
    ),
    path(
        "/forgotten-password-token/<str:forgotten_password_token>",
        ForgottenPasswordView.as_view(),
        name="forgotten-password-token",
    ),
    path(
        "/invitation/<str:invite_token>",
        InvitationView.as_view(),
        name="receive-invitation",
    ),
    path("/<int:pk>", RetrieveUpdateUserView.as_view(), name="update-user"),
    path("/api-token", APIAuthToken.as_view(), name="api-token"),
]

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from user_handler.jwt_token import HLTokenObtainPairView
from user_handler.views import (
    RegistrationView,
    HelloView,
    RetrieveUpdateUserView,
    APIAuthToken,
)
from user_handler.invitation import InvitationView
from user_handler.password_retrieval import (
    SendForgottenPasswordView,
    ForgottenPasswordView,
)
from user_handler.notifications import NotificationView

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
        "/forgotten-password-token/<str:token>",
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
    path("/notifications", NotificationView.as_view(), name="notifications"),
]

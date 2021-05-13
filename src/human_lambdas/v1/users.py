from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from human_lambdas.user_handler.invitation import InvitationView
from human_lambdas.user_handler.jwt_token import (
    GoogleToken,
    HLTokenObtainPairView,
)
from human_lambdas.user_handler.notifications import NotificationView
from human_lambdas.user_handler.password_retrieval import (
    ForgottenPasswordView,
    SendForgottenPasswordView,
)
from human_lambdas.user_handler.views import (
    APIAuthToken,
    HelloView,
    RegistrationView,
    RetrieveUpdateUserView,
)

urlpatterns = [
    path("/register", RegistrationView.as_view(), name="user-registration"),
    path("/token", HLTokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("/token/google", GoogleToken.as_view()),
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

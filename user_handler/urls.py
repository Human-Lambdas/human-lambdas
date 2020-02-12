from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    RegistrationView,
    HelloView,
    RetrieveUpdateDestroyUserView,
    GetOrganizationView,
    ListUsersView,
    SendInviteView,
    InvitationView,
    APIAuthToken,
)


urlpatterns = [
    path("register/", RegistrationView.as_view(), name="user-registration"),
    path("token/", jwt_views.TokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token-refresh"),
    path("hello/", HelloView.as_view(), name="hello"),
    path("<int:pk>", RetrieveUpdateDestroyUserView.as_view(), name="update-user"),
    path("", ListUsersView.as_view(), name="list-users"),
    path(
        "organizations/<int:pk>", GetOrganizationView.as_view(), name="get-organization"
    ),
    path("invite/", SendInviteView.as_view(), name="send-invite"),
    path("invitation/<str:invite_token>", InvitationView.as_view(), name="receive-invitation"),
    path("api-token/", APIAuthToken.as_view(), name="api-token"),
]

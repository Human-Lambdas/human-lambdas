from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    RegistrationView,
    HelloView,
    RetrieveUpdateDestroyUserView,
    GetOrganizationView,
    ListUsersView,
<<<<<<< HEAD
    SendInviteView,
=======
    APIAuthToken,
>>>>>>> 8152cb0b714c8c0bb9515a6d2c5c8b1419d147b7
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
<<<<<<< HEAD
    path(
        "invite/", SendInviteView.as_view(), name="send-invite"
    ),
=======
    path("api-token/", APIAuthToken.as_view(), name="api-token"),
>>>>>>> 8152cb0b714c8c0bb9515a6d2c5c8b1419d147b7
]

from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    RegistrationView,
    HelloView,
    RetrieveUpdateUserView,
    GetOrganizationView,
    ListUsersView,
)


urlpatterns = [
    path("register/", RegistrationView.as_view(), name="user-registration"),
    path("token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("hello/", HelloView.as_view(), name="hello"),
    path("<int:pk>", RetrieveUpdateUserView.as_view(), name="update-user"),
    path("", ListUsersView.as_view(), name="list-users"),
    path(
        "organizations/<int:pk>", GetOrganizationView.as_view(), name="get-organization"
    ),
]

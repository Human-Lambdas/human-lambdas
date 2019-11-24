from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import RegistrationView, HelloView


urlpatterns = [
    path('register/', RegistrationView.as_view(), name='user-registration'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloView.as_view(), name='hello'),
]
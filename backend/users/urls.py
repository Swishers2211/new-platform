from django.urls import path

from users.views import (RegisterAPIView, 
                        LoginAPIView, 
                        ProfileAPIView,
                        LogoutAPIView, 
                        CheckAuthAPIView,
                        CookieTokenObtainPairView,
                        CookieTokenRefreshView
)

app_name = 'users'

urlpatterns = [
    path('api/token/', CookieTokenObtainPairView.as_view()),
    path('api/token/refresh/', CookieTokenRefreshView.as_view()),
    path('api/check_auth/', CheckAuthAPIView.as_view()),
    path('api/logout/', LogoutAPIView.as_view()),
    path('api/<int:user_id>/', ProfileAPIView.as_view()),
    path('api/auth/', LoginAPIView.as_view()),
    path('api/create_account/', RegisterAPIView.as_view()),
]

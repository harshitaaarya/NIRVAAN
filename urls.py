```python
from django.urls import path
from . import views


urlpatterns = [
path('auth/', views.auth_page, name='auth'),
path('send-otp/', views.send_otp_view, name='send_otp'),
path('register/', views.register_view, name='register'),
path('login/', views.login_view, name='login'),
]
```


And include in project `nirvaan_project/urls.py`:
```python
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


urlpatterns = [
path('', include('accounts.urls')),
]
if settings.DEBUG:
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```


---

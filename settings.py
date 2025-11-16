Add `accounts` to INSTALLED_APPS and configure media/static.
```python
  # settings.py (only additions/changes shown)
INSTALLED_APPS += [
'accounts',
]


# Static & Media
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# For demo OTP in console, keep email backend as console
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```


If you want MySQL, configure DATABASES accordingly; default below uses SQLite (easy):
```python
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.sqlite3',
'NAME': BASE_DIR / 'db.sqlite3',
}
}
```


---



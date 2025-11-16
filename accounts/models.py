```python


class UserManager(BaseUserManager):
def create_user(self, email, phone, password=None, **extra_fields):
if not email and not phone:
raise ValueError('User must have email or phone')
email = self.normalize_email(email)
user = self.model(email=email, phone=phone, **extra_fields)
user.set_password(password)
user.save(using=self._db)
return user


def create_superuser(self, email, phone, password=None, **extra_fields):
extra_fields.setdefault('is_staff', True)
extra_fields.setdefault('is_superuser', True)
return self.create_user(email, phone, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
email = models.EmailField(unique=True, null=True, blank=True)
phone = models.CharField(max_length=15, unique=True, null=True, blank=True)


first_name = models.CharField(max_length=50)
last_name = models.CharField(max_length=50)
dob = models.DateField(null=True, blank=True)
permanent_address = models.TextField(blank=True)
corresponding_address = models.TextField(blank=True)
id_proof = models.FileField(upload_to='idproofs/', null=True, blank=True)
father_name = models.CharField(max_length=100, blank=True)
mother_name = models.CharField(max_length=100, blank=True)
gender = models.CharField(max_length=20, blank=True)


is_active = models.BooleanField(default=True)
is_staff = models.BooleanField(default=False)


objects = UserManager()


USERNAME_FIELD = 'email'
REQUIRED_FIELDS = ['phone']


def __str__(self):
return self.email or self.phone
```


> Note: We use a custom user model (AbstractBaseUser). If you prefer quicker setup, you can use Django's default `User` and a `Profile` model instead. If you choose custom user model, set `AUTH_USER_MODEL = 'accounts.User'` in settings.py BEFORE migrating.


---

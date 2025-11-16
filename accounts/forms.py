```python
from django import forms
from .models import User
from django.contrib.auth.forms import AuthenticationForm


class RegistrationForm(forms.ModelForm):
password = forms.CharField(widget=forms.PasswordInput)
confirm_password = forms.CharField(widget=forms.PasswordInput)
class Meta:
model = User
fields = ['first_name','last_name','dob','permanent_address','corresponding_address','phone','email','id_proof','father_name','mother_name','gender','password']


def clean(self):
cleaned = super().clean()
p1 = cleaned.get('password')
p2 = cleaned.get('confirm_password')
if p1 and p2 and p1 != p2:
self.add_error('confirm_password','Passwords do not match')
return cleaned


class LoginForm(AuthenticationForm):
username = forms.CharField(label='Email or Phone')
```


---

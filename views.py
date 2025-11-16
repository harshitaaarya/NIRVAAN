```python
from .models import User
import random
from django.core.mail import send_mail
from django.conf import settings


# We'll store OTPs in session for demo (not for production)


def auth_page(request):
reg_form = RegistrationForm()
login_form = LoginForm()
return render(request, 'accounts/auth.html', {'reg_form': reg_form, 'login_form': login_form})


def send_otp_view(request):
if request.method == 'POST':
phone = request.POST.get('phone')
email = request.POST.get('email')
otp = str(random.randint(1000,9999))
request.session['otp'] = otp
request.session['otp_phone'] = phone
request.session['otp_email'] = email
# Send email OTP (console backend will print it)
if email:
send_mail('Your NIRVAAN OTP', f'Your OTP is {otp}', settings.DEFAULT_FROM_EMAIL if hasattr(settings,'DEFAULT_FROM_EMAIL') else 'noreply@nirvaan.test', [email])
# For phone SMS: integrate with provider. Here we just store it and return.
return JsonResponse({'status':'ok','otp':otp})
return JsonResponse({'status':'fail'})


from django.http import JsonResponse


def register_view(request):
if request.method == 'POST':
form = RegistrationForm(request.POST, request.FILES)
otp = request.POST.get('otp')
if otp != request.session.get('otp'):
return JsonResponse({'status':'fail','message':'Invalid OTP'})
if form.is_valid():
user = form.save(commit=False)
user.set_password(form.cleaned_data['password'])
user.save()
return JsonResponse({'status':'ok'})
else:
return JsonResponse({'status':'fail','errors': form.errors})
return JsonResponse({'status':'fail','message':'POST only'})


from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def login_view(request):
if request.method == 'POST':
identity = request.POST.get('identity')
password = request.POST.get('password')
# Accept email or phone
user = None
if '@' in identity:
try:
user = User.objects.get(email=identity)
except User.DoesNotExist:
user = None
else:
try:
user = User.objects.get(phone=identity)
except User.DoesNotExist:
user = None
if user and user.check_password(password):
login(request, user)
return JsonResponse({'status':'ok'})
return JsonResponse({'status':'fail','message':'Invalid credentials'})
return JsonResponse({'status':'fail'})
```


---

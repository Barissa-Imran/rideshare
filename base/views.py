from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm
from . forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout


# Create your views here.
def home(request):
    return render(request,'base/index.html')

def homeUsers(request):
    return render(request,'base/welcome.html')

def login_page(request):
	if request.user.is_authenticated:
		return redirect('home')
	else:
		if request.method == 'POST':
			username = request.POST.get('username')
			password =request.POST.get('password')

			user = authenticate(request, username=username, password=password)

			if user is not None:
				login(request, user)
				return redirect('home')
			else:
				messages.info(request, 'Username OR password is incorrect')

		context = {}
		return render(request, 'base/login.html', context)

def register(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'An account was created for ' + user)
            return redirect('login')
    context = {'form':form}
    return render(request,'base/register.html',context)



def logoutUser(request):
    logout(request)
    return redirect('login')
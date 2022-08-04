from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.contrib.auth import login, authenticate, logout
from django.views.generic import CreateView, TemplateView, View
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages


from .forms import *

# Create your views here.


class OrganizerUserLogIn(View):
    def get(self, request):
        form = AuthenticationForm()
        return render(request=request, template_name="panel/organizer-sign-in.html", context={"form":form})

    def post(self,request):
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return redirect('panel:panel_home')
            else:
                messages.error(request,"Invalid username or password.")
        else:
            messages.error(request,"Invalid username or password.")
        return render(request=request, template_name="panel/organizer-sign-in.html", context={"form":form})



class OrganizerUserRegister(CreateView):
    template_name = 'panel/organizer-sign-up.html'
    success_url = reverse_lazy('accounts:organizer_login')
    form_class = OrganizerRegistrationForm


class OrganizerUserLogout(View):
    
    def get(self, request):
	    logout(request)
	    messages.info(request, "You have successfully logged out.") 
	    return redirect("accounts:organizer_login")

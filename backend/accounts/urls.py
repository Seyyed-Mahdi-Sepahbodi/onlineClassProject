from django.urls import path

from . import views

app_name = 'accounts'
urlpatterns = [
     path('organizer_login/',
         views.OrganizerUserLogIn.as_view(),
         name='organizer_login'
         ),
     path('organizer_register/',
         views.OrganizerUserRegister.as_view(),
         name='organizer_register'
         ),
     path("organizer_logout/", 
          views.OrganizerUserLogout.as_view(), 
          name= "organizer_logout"
          ),
]

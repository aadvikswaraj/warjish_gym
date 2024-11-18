from django.shortcuts import render

from django.http import HttpResponse
import datetime

from gym.models import notice, gallery

def home(request):
    notices = notice.objects.filter()[:10:-1]
    photos = gallery.objects.all().reverse()
<<<<<<< HEAD
    print(notices)
    return render(request, template_name="index.html", context={"notices":notices, "photos":photos})
=======
    return render(request, template_name="index.html", context={"notices":notices, "photos":photos})
>>>>>>> 91ee0c98946464682c49b5f9e5cb38b47e9a1745

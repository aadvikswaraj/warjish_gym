from django.shortcuts import render

from django.http import HttpResponse
import datetime

from gym.models import notice, gallery

def home(request):
    notices = notice.objects.filter()[:10:-1]
    photos = gallery.objects.all()
    print(notices)
    return render(request, template_name="index.html", context={"notices":notices, "photos":photos})
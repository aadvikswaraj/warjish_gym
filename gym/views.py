from django.shortcuts import render
import datetime
from django.http import JsonResponse

from gym.models import notice, gallery
import math
from django.views.decorators.csrf import csrf_exempt


def home(request):
    notices_count = notice.objects.all().count()
    photos_count = gallery.objects.all().count()
    return render(request, template_name="index.html", context={"notice_pages":math.ceil(notices_count/10), "photo_pages":math.ceil(photos_count/10)})

@csrf_exempt
def enquiryForm(request):
    if request.method == "POST":
        pass

def notices(request):
    if request.method == "GET":
        page = int(request.GET.get('page'))
        n = 10
        notices = notice.objects.all()[::-1][(page-1)*n:(page*n)]
        notices_json = {"data":[]}
        for i in notices:
            a = {}
            a["content"] = i.content
            a["date"] = i.date
            notices_json['data'].append(a)
        return JsonResponse(notices_json)

def photos(request):
    if request.method == "GET":
        page = int(request.GET.get('page'))
        n = 10
        photos = gallery.objects.all()[::-1][(page-1)*n:(page*n)]
        photos_json = {"data":[]}
        for i in photos:
            a = {}
            a['title'] = i.title
            a["image"] = '/media/'+str(i.image)
            photos_json['data'].append(a)
        return JsonResponse(photos_json)
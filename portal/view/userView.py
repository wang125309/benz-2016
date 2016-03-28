from django.http import JsonResponse

from portal.func.functionCommon import *

from portal.Constant import REQUEST_SUCCESS, REQUEST_ERROR,  USER_EXISTS, SERVICE_NOT_EXISTS

from portal.models import User, Service

#class User(models.Model):
#    name = models.CharField(max_length=127,null=True)
##    mobile = models.CharField(max_length=13,null=True)
 #   email = models.CharField(max_length=64,null=True)
#    sex = models.CharField(max_length=4,null=True)
#    province = models.CharField(max_length=256,null=True)
#    city = models.CharField(max_length=256,null=True)
#    service = models.ForeignKey(Service)

def insert_user(request):
    name = get_params(request, "name")
    province = get_params(request, "province")
    city = get_params(request, "city")
    service = get_params(request, "service")
    email = get_params(request, "email")
    mobile = get_params(request, "mobile")
    sex = get_params(request, "sex")
    exist_user = User.objects.filter(name=name)
    s = Service.objects.filter(id=service)

    if len(s) == 1:
        ser = s[0]
    else :
        return JsonResponse({
            "error_no": REQUEST_ERROR,
            "message": SERVICE_NOT_EXISTS
        })
    if len(exist_user):
        return JsonResponse({
            "error_no": REQUEST_ERROR,
            "message": USER_EXISTS
        })
    else :
        u = User(name=name,province=province,city=city,service=ser,email=email,mobile=mobile,sex=sex)
        u.save()
    return JsonResponse({
        "error_no": REQUEST_SUCCESS
    })
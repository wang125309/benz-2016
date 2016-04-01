# Create your views here.

from portal.view.userView import *
# coding=utf8
from django.shortcuts import render
from django.http import JsonResponse, HttpResponseRedirect
from django.conf import settings
import json
import logging
from models import *
from plugin import *
import datetime
from django.core.cache import cache
from functools import wraps
import sys
import re
import math
import random
import xlrd
import xlwt
reload(sys)
sys.setdefaultencoding('UTF-8')

# Create your views here.
logger = logging.getLogger(__name__)
appid = "wxd4f684d8f3edc620"
secret = "5b361b69fb998e0db1be2d873ed85326"


def wxconfig(request):
    url = request.POST['url']
    js_ticket = cache.get('js_ticket')
    print js_ticket
    s = sign(js_ticket, url)
    json = {
        "appId": appid,
        "timestamp": s['timestamp'],
        "nonceStr": 'nameLR9969',
        "signature": s['hash'],
        "jsApiList": ['onMenuShareAppMessage', 'onMenuShareTimeline', 'scanQRCode']
    }
    print json
    return JsonResponse(json)


def update_access_token(request):
    get_js_ticket(get_access_token(appid, secret), appid, secret)
    return JsonResponse({
        "status": "success"
    })


def submit(request):
    name = post_params(request, 'name')
    sex = post_params(request, 'sex')
    mobile = post_params(request, 'mobile')
    email = post_params(request, 'email')
    province = post_params(request, 'province')
    service = post_params(request, "mall")
    u = User(name=name, sex=sex, mobile=mobile, email=email, province=province, service_name=service)
    u.save()
    return JsonResponse({
        "error_no": 0
    })

def inexc(request):
    data = xlrd.open_workbook('./excelFile.xlsx')
    table = data.sheets()[0]
    cols = table.col_values(1)

    for i in cols:
        p = random.randint(100000,999999);
        b = BackUser(service_name=i,password=p)
        b.save()
    return JsonResponse({
        "error_no": 0
    })

def login(request):
    uname = post_params(request,'uname')
    upwd = post_params(request,'upwd')
    u = BackUser.objects.filter(service_name=uname)
    if len(u) == 1:
        if upwd == u[0].password:
            request.session['BKUSER'] = uname
            return JsonResponse({
                "error_no":"0"
            })
        else:
            return JsonResponse({
                "error_no":"1",
                "data":{
                    "message":"password wrong"    
                }
            })
    else:
        return JsonResponse({
            "error_no":"1",
            "data":{
                "message":"no such user"    
            }
        })

def download(request):
    f = xlwt.Workbook()
    table = f.add_sheet('active',cell_overwrite_ok=True)
    line = 0
    if request.session['BKUSER']:
        u = User.objects.filter(service_name=request.session['BKUSER'])
        for i in u:
            table.write(line,0,i.id)
            table.write(line,1,i.name)
            table.write(line,2,i.mobile)
            table.write(line,3,i.email)
            table.write(line,4,i.sex)
            table.write(line,5,i.province)
            table.write(line,6,i.service_name)
            line += 1
    f.save("static/data/"+request.session['BKUSER']+".xls")
    return JsonResponse({
        "error_no":"0",
        "file":"static/data/"+request.session['BKUSER']+".xls"
    })

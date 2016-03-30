# Create your views here.

from portal.view.userView import *
# coding=utf8
from django.shortcuts import render
from django.http import JsonResponse,HttpResponseRedirect
from django.conf import settings
import json
import requests
import logging
from models import *
from plugin import *
import datetime
from django.core.cache import cache
from functools import wraps
import sys
import re
import math
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
    s = sign(js_ticket,url)
    json = {
        "appId":appid,
        "timestamp":s['timestamp'],
        "nonceStr":'nameLR9969',
        "signature":s['hash'],
        "jsApiList":['onMenuShareAppMessage','onMenuShareTimeline','scanQRCode']
    }
    print json
    return JsonResponse(json)

def update_access_token(request):
    get_js_ticket(get_access_token(appid,secret),appid,secret)
    return JsonResponse({
        "status":"success"
    })



from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'one.view.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^portal/submit/', 'portal.views.submit'),
    url(r'^portal/wxconfig/', 'portal.views.wxconfig'),
    url(r'^portal/update_access_token/', 'portal.views.update_access_token'),
    url(r'^portal/inexc/', 'portal.views.inexc'),
    url(r'^portal/login/', 'portal.views.login'),
    url(r'^portal/download/', 'portal.views.download'),
]

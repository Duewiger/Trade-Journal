from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("pjm-admin/", admin.site.urls),
    path("accounts/", include("allauth.urls")),
    path("analytics/", include("analytics.urls")),
    path("assistant/", include("assistant.urls")),
    path("depots/", include("depots.urls")),
    path("investments/", include("investments.urls")),
    path("notes/", include("notes.urls")),
    path("transactions/", include("transactions.urls")),
    path("api/", include("api.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
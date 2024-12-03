from django.urls import path
from .views import (
    LoginPageView, LogoutPageView, ForgotPasswordPageView, ResetPasswordPageView,
    AccountPageView, AccountDataEditView, AccountDeleteView, SignupPageView,
    DocumentUploadView, AccountLockedView, VerifyCodeView, DocumentListView,
    DocumentSearchView, DocumentDownloadView, DocumentDeleteView
)

urlpatterns = [
    path("login/", LoginPageView.as_view(), name="login"),
    path("logout/", LogoutPageView.as_view(), name="logout"),
    path("forgot-password/", ForgotPasswordPageView.as_view(), name="forgot_password"),
    path("reset-password/<uuid:user_id>/<str:token>/", ResetPasswordPageView.as_view(), name="reset_password"),
    path("", AccountPageView.as_view(), name="account_data_list"),
    path("signup/", SignupPageView.as_view(), name="signup"),
    path("verify/", VerifyCodeView.as_view(), name="verify_code"),
    path("<uuid:pk>/", AccountDataEditView.as_view(), name="account_data_edit"),
    path("<uuid:pk>/delete/", AccountDeleteView.as_view(), name="account_delete"),
    path("upload-document/", DocumentUploadView.as_view(), name="upload_document"),
    path("account_locked/", AccountLockedView.as_view(), name="account_locked"),
    path("documents/", DocumentListView.as_view(), name="document_list"),
    path("documents/search/", DocumentSearchView.as_view(), name="document_search"),
    path("documents/<uuid:pk>/download/", DocumentDownloadView.as_view(), name="document_download"),
    path("documents/<uuid:pk>/delete/", DocumentDeleteView.as_view(), name="document_delete"),
]
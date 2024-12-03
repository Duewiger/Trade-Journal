import os
from pathlib import Path
from environs import Env
from datetime import timedelta

env = Env()
env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("DJANGO_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("DJANGO_DEBUG", default=False)


ALLOWED_HOSTS = ['*']


INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # external
    "axes",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "corsheaders",
    "django_recaptcha",
    "django_twilio",
    "rest_framework",
    "rest_framework.authtoken",
    # internal
    "accounts.apps.AccountsConfig",
    "analytics.apps.AnalyticsConfig",
    "assistant.apps.AssistantConfig",
    "depots.apps.DepotsConfig",
    "investments.apps.InvestmentsConfig",
    "notes.apps.NotesConfig",
    "transactions.apps.TransactionsConfig",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    # place corsheaders before any middleware that can generate responses
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    # "django.middleware.csrf.CsrfViewMiddleware", # Due to JWT
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "allauth.account.middleware.AccountMiddleware", # Allauth
    "django_auto_logout.middleware.auto_logout", # Auto logout
    "axes.middleware.AxesMiddleware", # Brute Force
]

ROOT_URLCONF = "trade_journal.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                # Auto logout
                "django_auto_logout.context_processors.auto_logout_client",
            ],
        },
    },
]

WSGI_APPLICATION = "trade_journal.wsgi.application"


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("DATABASE_NAME"),
        "USER": env("DATABASE_USER"),
        "PASSWORD": env("DATABASE_PASSWORD"),
        "HOST": env("DATABASE_HOST"),
        "PORT": env("DATABASE_PORT", default="5432"),
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/
LANGUAGE_CODE = "de-de"

TIME_ZONE = "Europe/Berlin"

## Set True to use UTC on data / False for local time
USE_TZ = True

## Django Translations
USE_I18N = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "accounts.CustomUser"

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "UNAUTHENTICATED_CSRF": False,
}

AUTHENTICATION_BACKENDS = [
    "axes.backends.AxesStandaloneBackend",  # Axes Brute-Force-Prot
    "django.contrib.auth.backends.ModelBackend",  # Django standard
]

CORS_ALLOW_CREDENTIALS = False  # Not neccessary for jwt
CORS_ALLOW_HEADERS = [
    "content-type",
    "authorization",  # required for jwt!
]
CORS_ALLOW_METHODS = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
# CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = [
    "https://www.project-tradejournal.duewiger-projects.com",
    "https://project-tradejournal.duewiger-projects.com",
    "https://www.duewiger-projects.com",
    "https://duewiger-projects.com",
    "https://www.duewiger.com",
    "https://duewiger.com",
]

# In Dev Only!
CORS_ORIGIN_ALLOW_ALL = True


# HTTPS
SESSION_COOKIE_SECURE = True  # HTTPS only and Session usage
CSRF_COOKIE_SECURE = True  # If cookies are used tho

# Session runtime
AUTO_LOGOUT = {
    'IDLE_TIME': 1800,
    'REDIRECT_URL': '/accounts/login/',  # Redirect after logout
}


# if load balancer or proxys are used
# AXES_PROXY_ORDER = "left-most"

AXES_FAILURE_LIMIT: 3
AXES_COOLOFF_TIME: 1
AXES_RESET_ON_SUCCESS = True


SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": True, # refresh after each call
    "BLACKLIST_AFTER_ROTATION": True, # invalid after rotation
    "AUTH_HEADER_TYPES": ("Bearer",), # Token with "Bearer" in header
}


# Recaptcha Keys
RECAPTCHA_PUBLIC_KEY = env("RECAPTCHA_PUBLIC_KEY")
RECAPTCHA_PRIVATE_KEY = env("RECAPTCHA_PRIVATE_KEY")
NOCAPTCHA = env.bool("NOCAPTCHA")


# Twilio 2FA
TWILIO_ACCOUNT_SID = env("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = env("TWILIO_AUTH_TOKEN")
TWILIO_VERIFICATION_SERVICE_SID = env("TWILIO_VERIFICATION_SERVICE_SID")
TWILIO_CALLER_ID = env("TWILIO_CALLER_ID")

OPENAI_API_KEY = env("OPENAI_API_KEY")

SENDGRID_API_KEY = env("SENDGRID_API_KEY")


# # AWS S3 settings
# AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
# AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
# AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME")
# AWS_S3_REGION_NAME = "eu-central-1"
# AWS_LOCATION = 'media'

# # Static Files via S3
# STATICFILES_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
# STATIC_URL = f"https://{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/static/"

# # Media Files via S3
# DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
# MEDIA_URL = f"https://{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/media/"
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# # Setup for production logfiles only
# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'handlers': {
#         'console': {
#             'level': 'DEBUG',
#             'class': 'logging.StreamHandler',
#         },
#         'file': {
#             'level': 'DEBUG',
#             'class': 'logging.FileHandler',
#             'filename': 'django_debug.log',
#         },
#     },
#     'loggers': {
#         'django': {
#             'handlers': ['console', 'file'],
#             'level': 'DEBUG',
#             'propagate': True,
#         },
#         'assistant': {
#             'handlers': ['console', 'file'],
#             'level': 'DEBUG',
#             'propagate': True,
#         },
#         'accounts': {
#             'handlers': ['console', 'file'],
#             'level': 'DEBUG',
#             'propagate': True,
#         },
#     },
# }
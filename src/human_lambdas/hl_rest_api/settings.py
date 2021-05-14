"""
Django settings for hl-rest-api project.

Generated by 'django-admin startproject' using Django 2.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import sys
import uuid
from datetime import timedelta
from pathlib import Path

import requests
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False if os.getenv("DEBUG") == "False" else True


HOOK_EVENTS = {
    "task.completed": "workflow_handler.Task.completed",
}
HOOK_CUSTOM_MODEL = "workflow_handler.WebHook"
HOOK_FINDER = "human_lambdas.workflow_handler.utils.find_and_fire_hook"

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "human_lambdas.user_handler",
    "human_lambdas.workflow_handler",
    "human_lambdas.templates_handler",
    "human_lambdas.external",
    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",
    # "rest_framework.authtoken",
    "rest_hooks",
    "drf_yasg2",
]

APPEND_SLASH = False

SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")

HL_CLIENT_API_KEY = os.getenv("HL_CLIENT_API_KEY")
HL_ORG_ID = os.getenv("HL_ORG_ID")

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "human_lambdas.hl_rest_api.urls"

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
            ],
        },
    },
]

WSGI_APPLICATION = "human_lambdas.hl_rest_api.wsgi.application"

if "POSTGRES_DB" in os.environ:
    print("Running against Postgres")
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": os.getenv("POSTGRES_DB"),
            "USER": os.getenv("POSTGRES_USER"),
            "PASSWORD": os.getenv("POSTGRES_PASSWORD"),
            "HOST": os.getenv("POSTGRES_HOST"),
            "PORT": os.getenv("POSTGRES_PORT"),
        }
    }
else:
    print("No POSTGRES_DB given, using sqlite")
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": (Path.cwd() / ".hl_db").as_posix(),
        },
    }


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

AUTH_USER_MODEL = "user_handler.User"

if DEBUG:
    DEFAULT_PERMISSION = "rest_framework.permissions.AllowAny"
    ALLOWED_HOSTS = ["*"]
else:
    ALLOWED_HOSTS = [
        # "human-lambdas-api.eu-west-2.elasticbeanstalk.com",
        # "human-lambdas-api-stg.eu-west-2.elasticbeanstalk.com",
        # "human-lambdas-api-redesign.eu-west-2.elasticbeanstalk.com",
        # "api.humanlambdas.com",
        # "api-stg.humanlambdas.com",
        # "localhost",
        "*",
    ]
    DEFAULT_PERMISSION = "rest_framework.permissions.IsAuthenticated"

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read_only access for unauthenticated users.
    "DEFAULT_PERMISSION_CLASSES": [DEFAULT_PERMISSION],
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "EXCEPTION_HANDLER": "human_lambdas.hl_rest_api.utils.custom_exception_handler",
    # "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
}

ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_AUTHENTICATION_METHOD = "email"

ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_EMAIL_FIELD = "email"
ACCOUNT_LOGOUT_ON_GET = True

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

REST_AUTH_SERIALIZERS = {
    "USER_DETAILS_SERIALIZER": "human_lambdas.user_handler.serializers.UserLoginSerializer",
}
REST_AUTH_REGISTER_SERIALIZERS = {
    "REGISTER_SERIALIZER": "human_lambdas.user_handler.serializers.UserCreateSerializer",
}

REGIONAL_BUCKET_AU = os.getenv("REGIONAL_BUCKET_AU")
REGIONAL_BUCKET_US = os.getenv("REGIONAL_BUCKET_US")
DEFAULT_DEV_BUCKET = "data-local-dev"

TESTING = "test" in sys.argv
if TESTING:
    LOGGING = {}
else:
    LOGGING = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "verbose": {
                "format": "%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s"
            },
            "simple": {"format": "%(levelname)s %(asctime)s %(message)s"},
        },
        "handlers": {
            "console": {
                "level": "INFO",
                "class": "logging.StreamHandler",
                "formatter": "simple",
            },
        },
        "loggers": {
            "django": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
            "human_lambdas.workflow_handler": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
            "human_lambdas.user_handler": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
            "organization_handler": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
            "metrics": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
            "human_lambdas.external": {
                "handlers": ["console"],
                "level": "INFO",
                "propagate": True,
            },
        },
    }

SIMPLE_JWT = {
    # https://github.com/davesque/django-rest-framework-simplejwt
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "ALGORITHM": "HS256",
    "REFRESH_TOKEN_LIFETIME": timedelta(days=14),
    "SIGNING_KEY": os.getenv("SECRET_KEY"),
    "ROTATE_REFRESH_TOKENS": True,
}


if not DEBUG:
    SENTRY_KEY = os.getenv("SENTRY_KEY")
    SENTRY_PROJECT = os.getenv("SENTRY_PROJECT")

    if not SENTRY_KEY is None and not SENTRY_PROJECT is None:
        sentry_sdk.init(
            dsn="https://{0}@sentry.io/{1}".format(SENTRY_KEY, SENTRY_PROJECT),
            integrations=[DjangoIntegration()],
            # If you wish to associate users to errors (assuming you are using
            # django.contrib.auth) you may enable sending PII data.
            send_default_pii=True,
        )

FRONT_END_BASE_URL = os.getenv("APP_URL")
API_URL = os.getenv("API_URL")

LOCAL_IP = None
try:
    LOCAL_IP = requests.get(
        "http://169.254.169.254/latest/meta-data/local-ipv4", timeout=0.01
    ).text
except requests.exceptions.RequestException:
    pass
if LOCAL_IP and not DEBUG:
    ALLOWED_HOSTS.append(LOCAL_IP)


SEGMENT_KEY = os.environ.get("SEGMENT_KEY")

# Notification email
SEND_NOTIFICATION_TEMPLATE = os.environ.get("SEND_NOTIFICATION_TEMPLATE")
NOTIFICATION_ASM_GROUPID = os.environ.get("NOTIFICATION_ASM_GROUPID")

THROTTLING_TIME_MIN = 5

# Account Emails
INVITATION_EXPIRATION_WINDOW_DAYS = 30
INVITATION_TEMPLATE = os.environ.get("INVITATION_TEMPLATE")
ACCOUNT_ASM_GROUPID = os.environ.get("ACCOUNT_ASM_GROUPID")
FORGOTTEN_PASSWORD_TEMPLATE = os.environ.get("FORGOTTEN_PASSWORD_TEMPLATE")


# Swagger
SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Token": {"type": "apiKey", "name": "Authorization", "in": "header"},
    },
}

GOOGLE_OAUTH_CLIENT_ID = (
    "725636052597-sp46vdemr0u2s0hh698nqupjdvucoa3o.apps.googleusercontent.com"
)

# AU_DATA_BUCKET = os.environ["AU_DATA_BUCKET"]
# NA_DATA_BUCKET = os.environ["NA_DATA_BUCKET"]

if os.getenv("PYTEST") == "true":
    STORAGE_TEST_PREFIX = str(uuid.uuid4())
else:
    STORAGE_TEST_PREFIX = None

DEV_BUCKET = "data-local-dev"

REGIONAL_BUCKET_AU = os.getenv("REGIONAL_BUCKET_AU", DEV_BUCKET)
REGIONAL_BUCKET_US = os.getenv("REGIONAL_BUCKET_US", DEV_BUCKET)

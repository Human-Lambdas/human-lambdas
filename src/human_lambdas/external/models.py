import rest_framework.authtoken.models
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _

from human_lambdas.user_handler.models import Organization


@python_2_unicode_compatible
class Token(rest_framework.authtoken.models.Token):
    # key is no longer primary key, but still indexed and unique
    key = models.CharField(_("Key"), max_length=40, db_index=True, unique=True)
    # relation to user is a ForeignKey, so each user can have more than one token
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="auth_tokens",
        on_delete=models.CASCADE,
        verbose_name=_("User"),
    )
    organization = models.ForeignKey(
        Organization,
        related_name="auth_tokens",
        on_delete=models.CASCADE,
        verbose_name=_("Organization"),
    )

    class Meta:
        unique_together = (("user", "organization"),)

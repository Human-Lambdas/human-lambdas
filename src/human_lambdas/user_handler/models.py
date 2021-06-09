from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models


class Notification(models.Model):
    enabled = models.BooleanField(default=True)

    def format_output(self):
        return {
            "enabled": self.enabled,
            "queue_notifications": [
                {
                    "queue_id": wnotification.workflow.pk,
                    "queue_name": wnotification.workflow.name,
                    "enabled": wnotification.enabled,
                }
                for wnotification in self.workflownotification_set.filter(
                    workflow__disabled=False
                ).all()
            ],
        }


class LowercaseEmailField(models.EmailField):
    """
    Override EmailField to convert emails to lowercase before saving.
    """

    def to_python(self, value):
        """
        Convert email to lowercase.
        """
        value = super(LowercaseEmailField, self).to_python(value)
        # Value can be None so check that it's a string before lowercasing.
        if isinstance(value, str):
            return value.lower()
        return value


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(email=self.normalize_email(email), name=email)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_superuser = True
        user.save(using=self._db)
        org = Organization.objects.filter(name="superusers")
        if org.exists():
            org = org.first()
        else:
            org = Organization(name="superusers")
            org.save()
        org.add_admin(user)
        return user


class User(AbstractBaseUser):
    name = models.CharField(max_length=128, null=True)
    email = LowercaseEmailField(unique=True)
    USERNAME_FIELD = "email"
    objects = UserManager()
    current_organization_id = models.IntegerField(null=True)
    is_superuser = models.BooleanField(default=False)
    notifications = models.OneToOneField(
        Notification, on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.email

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_superuser

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def get_current_organization(self):
        return self.organization_set.filter(pk=self.current_organization_id).first()

    @is_staff.setter
    def is_staff(self, value):
        self._is_staff = value


class Organization(models.Model):
    name = models.CharField(max_length=128)
    user = models.ManyToManyField(User)
    admin = models.ManyToManyField(User, related_name="admin_user")

    def __str__(self):
        return self.name

    def add_admin(self, user):
        self.user.add(user)
        self.admin.add(user)


class Invitation(models.Model):
    def __eq__(self, other):
        return self.email == other.email and self.organization == other.organization

    def __hash__(self):
        return hash((self.email, self.organization))

    email = LowercaseEmailField()
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    invited_by = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=128)
    datetime = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField()
    admin = models.BooleanField(default=False)
    invite_link = models.TextField(null=True)

    def __str__(self):
        return "{0}_invite_to_{1}".format(self.email, self.organization)


class ForgottenPassword(models.Model):
    email = LowercaseEmailField()
    token = models.CharField(max_length=128)
    datetime = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField()

    def __str__(self):
        return "{0}_forgotten_password".format(self.email)

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(email=self.normalize_email(email),)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(email, password=password,)
        user.is_admin = True
        user.save(using=self._db)
        org = Organization.objects.filter(name="superusers")
        if org.exists():
            org = org.first()
        else:
            org = Organization(name="superusers")
            org.save()
        org.user.add(user)
        return user


class User(AbstractBaseUser):
    name = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

    @property
    def is_superuser(self):
        return self.is_admin

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin

    @is_staff.setter
    def is_staff(self, value):
        self._is_staff = value


class Organization(models.Model):
    name = models.CharField(max_length=128, unique=True)
    user = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class Invitation(models.Model):
    email = models.EmailField()
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    invited_by = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=128)
    datetime = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField()

    def __str__(self):
        return "{0}_invite_to_{1}".format(self.email, self.organization)


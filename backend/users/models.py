from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='Почта')
    username = models.CharField(max_length=60, verbose_name='Имя пользователя')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='Почта')
    username = models.CharField(max_length=60, verbose_name='Имя пользователя')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return f'Пользователь {self.username} - {self.email}'

class Balance(models.Model):
    balance = models.IntegerField(default=0, verbose_name='Баланс')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='balance', verbose_name='Пользователь')

    class Meta:
        verbose_name = 'Баланс'
        verbose_name_plural = 'Балансы'
    
    def __str__(self):
        return f'Пользователь {self.user.email} - баланс {self.balance}'
from django.contrib import admin

from users.models import User, Balance

admin.site.register(Balance)
admin.site.register(User)

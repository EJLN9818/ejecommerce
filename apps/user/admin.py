from django.contrib import admin
from django.contrib.auth import get_user_model

from . import models

user = get_user_model()

@admin.register(user)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'email',
        'first_name',
        'last_name',
        'is_staff',
        'is_superuser',
        'is_active',
    )
    list_display_links = ('first_name', 'last_name', 'email')
    search_fields = ('first_name', 'last_name', 'email')
    list_per_page = 25
from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'instructor', 'students', 'created_at', 'updated_at']
        read_only_fields = ['instructor', 'students', 'created_at', 'updated_at']
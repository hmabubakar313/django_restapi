from rest_framework import serializers
# from rest_framework import Student
from api.models import Student




class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        """ fields = ('id', 'first_name', 'last_name', 'email') """
        fields = '__all__'
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.serializers import UserSerializer
from base.models import UserInfo


@api_view(['POST'])
def addUserInfo(request):
    print('enter create')
    data = request.data

    userinfo = UserInfo.objects.create(
        firstname=data['firstname'],
        lastname=data['lastname'],
        email=data['email'],
        address=data['address'],
        city=data['city'],
        state=data['state'],
        zip=data['zip'],
        illness=data['illnessId'],
        severity=data['severityLevel'],
        hospital=data['hospitalId']
    )

    serializer = UserSerializer(userinfo, many=False)
    return Response(serializer.data)

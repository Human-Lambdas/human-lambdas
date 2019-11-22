from django.shortcuts import HttpResponse
from django.views import View
from .models import Workflow


# class AddWorkflow(View):
#     def get(self, request):
#         # return the model attributes
#         pass
#
#     def post(self, request):
#         # store the data and return status FAIL/SUCCESS
#         data, status = process_data(request.data)
#         if status == "success":
#             Workflow(**data).save()
#         return HttpResponse({"status": status}, content_type='application/json')
#
#
# class UploadData(View):
#
#     def get(self, request):
#         return
#
#     def post(self, request):
#         status = create_tasks(request.data)
#         return HttpResponse({"status": status}, content_type='application/json')
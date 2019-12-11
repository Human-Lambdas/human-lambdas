# from django.conf import settings
#
# from django.contrib.contenttypes.fields import GenericForeignKey
# from django.contrib.contenttypes.models import ContentType
# from django.contrib.gis.db import models

# from djcelery.models import TaskMeta

from drf_chunked_upload.models import ChunkedUpload

# from celery import states


class Upload(ChunkedUpload):
    pass
    # upload_dir = settings.UPLOADS_DIRECTORY
    # ABORTED = 4
    # STATUS_CHOICES = ChunkedUpload.STATUS_CHOICES + (
    #     (ABORTED, 'Aborted'),
    # )
    # content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    # object_id = models.UUIDField(null=True, blank=True)
    # content_object = GenericForeignKey('content_type', 'object_id',
    #                                    for_concrete_model=False)
    # is_update = models.BooleanField(default=False)
    # parent_object_content_type = \
    #     models.ForeignKey(ContentType, related_name="upload_parent",
    #                       null=True, blank=True, on_delete=models.CASCADE)
    # parent_object_id = models.UUIDField(null=True, blank=True)
    # parent_object = GenericForeignKey('parent_object_content_type',
    #                                   'parent_object_id',
    #                                   for_concrete_model=False)
    # comment = models.TextField(blank=True)
    #
    # def is_aborted(self):
    #     return self.status == self.ABORTED
    #
    # def get_status(self):
    #     return self.status
    #
    # def delete_files(self):
    #     if self.file:
    #         storage, path = self.file.storage, self.file.path
    #         storage.delete(path)

    # def cancel(self, total_annihilation=False):
    #     from ..tasks import process_upload
    #     if self.status == self.UPLOADING:
    #         self.status = self.ABORTED
    #         self.save()
    #         return True
    #     elif self.status == self.COMPLETE and \
    #             states.state(self.task.status) < states.REVOKED:
    #         task = process_upload.AsyncResult(self.task.task_id)
    #         task.abort()
    #         self.status = self.ABORTED
    #         self.save()
    #         return True
    #     elif self.status >= self.ABORTED or \
    #             (self.task and states.state(self.task.status) >=
    #              states.REVOKED):
    #         return False
    #     else:
    #         return None
    #     pass

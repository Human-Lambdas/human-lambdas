from drf_chunked_upload.views import ChunkedUploadView
from rest_framework.permissions import AllowAny

from .models import Upload
from .serializers import UploadSerializer, UploadCreateSerializer


class UploadView(ChunkedUploadView):
    model = Upload
    serializer_class = UploadSerializer
    permission_classes = (AllowAny,)
    # max_bytes = settings.MAX_BYTES

    @property
    def response_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request is None or self.request.method not in ['PUT', 'POST']:
            serializer_class = UploadCreateSerializer
        return serializer_class
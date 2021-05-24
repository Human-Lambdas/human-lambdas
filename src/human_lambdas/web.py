from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

HTML_DIR = Path(__file__).parent / "html" / "build"


class MyHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if "." in path:
            # Don't rewrite URL for page resources
            return f"{HTML_DIR}/{path}"
        return f"{HTML_DIR}/index.html"


httpd = HTTPServer(("0.0.0.0", 3000), MyHandler)

from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

HTML_DIR = Path(__file__).parent / "html"


class MyHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if "." in path:
            # Don't rewrite URL for page resources
            return f"{HTML_DIR}/{path}"
        return f"{HTML_DIR}/index.html"


if __name__ == "__main__":
    httpd = HTTPServer(("127.0.0.1", 3000), MyHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("stopping")

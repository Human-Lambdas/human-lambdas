#!/usr/bin/env python
from http.server import HTTPServer, SimpleHTTPRequestHandler


class MyHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if "." in path:
            # Don't rewrite URL for page resources
            return f"html/{path}"
        return "html/index.html"


if __name__ == "__main__":
    httpd = HTTPServer(("127.0.0.1", 8000), MyHandler)
    httpd.serve_forever()

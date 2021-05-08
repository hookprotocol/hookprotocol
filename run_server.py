#!/usr/bin/env python3

import re
import os.path
import warnings
import tempfile

from http.server import SimpleHTTPRequestHandler
import http.server as SimpleHTTPServer

error_tmpl = '''
<p style="background-color: #660000; color: white; padding: 20px">
  %s
</p>
'''


def ssi(path, web_path):
    'Read a file, expanding <!-- #include --> statements.'
    def get_include_file_content(x):
        file_to_read = x.group(1)
        recursive_web_path = web_path
        if len(os.path.dirname(web_path)) > 2:
            file_to_read = os.path.join(
                os.path.dirname(web_path), file_to_read)[1:]
            recursive_web_path = '/%s/' % os.path.dirname(file_to_read)
        if os.path.exists(file_to_read):
            # Recursively process ssi calls in the included file
            return ssi(file_to_read, recursive_web_path)
        else:
            error = 'File not found: %s' % file_to_read
            warnings.warn(error)
            return error_tmpl % error

    content = open(path).read()
    content = re.sub(r'<!--\s*#include\s+file=[\'"]([^\'"]+)[\'"]\s*-->',
                     get_include_file_content,
                     content)
    return content


class SSIRequestHandler(SimpleHTTPRequestHandler):
    """Adds minimal support for <!-- #include --> directives.

    The key bit is translate_path, which intercepts requests and serves them
    using a temporary file which inlines the #includes.
    """

    def __init__(self, request, client_address, server):
        self.temp_files = []
        SimpleHTTPRequestHandler.__init__(
            self, request, client_address, server)

    def do_GET(self):
        SimpleHTTPRequestHandler.do_GET(self)
        self.delete_temp_files()

    def do_HEAD(self):
        SimpleHTTPRequestHandler.do_HEAD(self)
        self.delete_temp_files()

    def translate_path(self, path):
        fs_path = SimpleHTTPRequestHandler.translate_path(self, path)
        if self.path.endswith('/'):
            for index in "index.html", "index.htm", "index.shtml":
                index = os.path.join(fs_path, index)
                if os.path.exists(index):
                    fs_path = index
                    break

        if (fs_path.endswith('.html') or fs_path.endswith(".shtml")) and os.path.exists(fs_path):
            content = ssi(fs_path, path)
            fs_path = self.create_temp_file(fs_path, content)
        return fs_path

    def delete_temp_files(self):
        for temp_file in self.temp_files:
            os.remove(temp_file)

    def create_temp_file(self, original_path, content):
        _, ext = os.path.splitext(original_path)
        if ext == ".shtml":
            ext = ".html"
        fd, path = tempfile.mkstemp(suffix=ext)
        try:
            os.write(fd, content)  # This works for Python 2
        except TypeError:
            os.write(fd, bytes(content, 'UTF-8'))  # This works for Python 3
        os.close(fd)

        self.temp_files.append(path)
        return path


if __name__ == '__main__':
    www = os.path.join(os.path.dirname(__file__), 'www')
    os.chdir(www)
    SimpleHTTPServer.test(HandlerClass=SSIRequestHandler)

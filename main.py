import http.server

print(http.server)
base_handler = http.server.BaseHTTPRequestHandler
simple_handler = http.server.SimpleHTTPRequestHandler
http_server = http.server.HTTPServer


class MyServer(simple_handler):
    def do_GET(self): 
        if self.path == "/":
            with open("index.html", "r", encoding="utf-8") as file: page = file.read()

            self.send_response(200)
            self.send_header("Content_Type", "text/html; charset=utf-8")
            self.end_headers()

            self.wfile.write(page.encode("utf-8"))

        else:
            super().do_GET()

server = http_server(("127.0.0.1",8000), MyServer)
print("서버 가동중입니다.")
server.serve_forever()
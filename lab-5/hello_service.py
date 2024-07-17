from spyne import Application, rpc, ServiceBase, Unicode
from spyne.protocol.soap import Soap11
from spyne.server.wsgi import WsgiApplication
from wsgiref.simple_server import make_server

class HelloService(ServiceBase):
    @rpc(Unicode, _returns=Unicode)
    def SayHello(ctx, name):
        return f"Hello, {name}!"

application = Application(
    [HelloService],
    tns='http://example.com/helloservice',
    in_protocol=Soap11(),
    out_protocol=Soap11(),
)

wsgi_app = WsgiApplication(application)

if __name__ == '__main__':
    server = make_server('0.0.0.0', 8000, wsgi_app)
    print("Listening on port 8000...")
    server.serve_forever()

//code.jquery.com/jquery-latest.min.js
var http=require('http');
var url=require('url');
var fs=require('fs');

var servidor=http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
    var camino='customer-directiva'+objetourl.pathname;
    if (camino=='customer-directiva/')
        camino='customer-directiva/index.html';
    fs.exists(camino,function(existe){
        if(!error) {
                switch (fileType) {
                    case ".css":
                        response.writeHead(200, {"Content-Type": "text/css"});
                        response.write(content);
                    break;
                    case ".js":
                        response.writeHead(200, {"Content-Type": "text/javascript"});
                        response.write(content);
                    break;
                    default:
                        response.writeHead(200, {"Content-Type": "text/html"});
                        response.write(content);
                }
                response.end();
            } else {
                response.writeHead(404, {"Content-Type": "text/html"});
                response.write("error file");
                response.end(error);
        }
    });
});

servidor.listen(8888);

console.log('Servidor web iniciado');



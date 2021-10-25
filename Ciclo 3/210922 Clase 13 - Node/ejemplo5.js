const http = require('http');
const url = require('url');

const servidor = http.createServer((pedido,respuesta) =>{
    const objetoUrl = url.parse(pedido.url);
    console.log('Ruta del recurso y parámeteros: '+objetoUrl.path);
    console.log('Solo ruta y nombre del recurso: '+objetoUrl.pathname);
    console.log('Parámetros del recurso: '+objetoUrl.query);
    respuesta.writeHead(200,{'Content-Type': 'text/html'});
    respuesta.write(`<doctype html><html><head></head><body><h1>Sitio en desarrollo</h1></body></html>`);
    respuesta.end();
});
servidor.listen(8888)
console.log('Servidor Iniciado')
const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'contentType': 'aplicacion json' })

        let salida = {
            nombre: 'david',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto');
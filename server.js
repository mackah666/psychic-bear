var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world mackah666! Cooking on gas!!!!');
    
}).listen(process.env.PORT || 8080);
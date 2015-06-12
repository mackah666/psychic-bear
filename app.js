var http = require('http');
 
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('<p>Hello world mackah!</p>');
    res.end();
});
 
var port = 80;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
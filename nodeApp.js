var http = require("http");
var fs = require("fs");
var os = require('os');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text.plain'});
    response.end('Hello Node\n');
}).listen(8081);

var data = fs.readFileSync('data.txt');
console.log(data.toString());

console.log(os.hostname());
console.log('Server running at http://127.0.0.1:8081/');
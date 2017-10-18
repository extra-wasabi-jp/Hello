var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end("Hello, World from Node.js\n");
}).listen(1337, "localhost");
console.log("Starting localhsot:1337");

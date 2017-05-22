var http = require("http");

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'content-type' : 'text'})

	response.end("Hllo World")
})

server.listen(8081, function() {
	console.log("server is running at 8081")
})
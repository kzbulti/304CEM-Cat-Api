var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	if (req.url= "/cats") {
		fs.readFile('cat.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
  }
  else {
		fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
  }
  });
}).listen(8080);
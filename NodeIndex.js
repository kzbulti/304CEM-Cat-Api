var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === "/cats") {
    fs.readFile('cat.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
      }
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile('index.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
      }
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
}).listen(8080);

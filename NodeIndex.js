var http = require('http');
var fs = require('fs');
const path = require('path');

http.createServer(onRequest).listen(8080);

function onRequest(request, response) {
  if (request.url.startsWith("/public/")) {
	fs.readFile(path.join(__dirname, path.normalize(request.url)), function (err,data) {
	  if (err) {
		response.writeHead(404);
		response.end(JSON.stringify(err));            
		return;
	  }
	response.writeHead(200);
	response.end(data);
  });

  return;
}

  if (request.url == "/cat.html") {	  
    fs.readFile('cat.html', function(err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        return response.end();
      }

      
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      return response.end();
    });
  } else if (request.url == "/vote.html") {
	
    fs.readFile('vote.html', function(err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        return response.end();
      }
      
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      return response.end();
    });
  } else if (request.url == "/index.html" ) {
	
    fs.readFile('index.html', function(err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        return response.end();
      }
      
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      return response.end();
    });
  }
  else {
	
	fs.readFile('index.html', function(err, data) {
		if (err) {
		  response.writeHead(404, {'Content-Type': 'text/plain'});
		  response.write('404 Not Found');
		  return response.end();
		}
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		return response.end();
	  });
  }
}

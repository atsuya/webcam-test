var http = require('http')
  , fs = require('fs')
  , ws = require('websocket.io');

function serveFile(path, res) {
  var data = fs.readFileSync(path, 'utf-8');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
}

var httpServer = http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(404, {'Content-Type': 'text/text'});
    res.end('not found');
  } else if (req.url === '/sender.html') {
    serveFile('./sender.html', res);
  } else if (req.url === '/receiver.html') {
    serveFile('./receiver.html', res);
  }
});
httpServer.listen(8000);

var clients = [];
var websocketServer = ws.attach(httpServer);
websocketServer.on('connection', function (socket) {
  console.log('connected');
  clients.push(socket);

  socket.on('message', function (data) {
    clients.forEach(function(client) {
      client.send(data);
    });
  });

  socket.on('close', function () {
    console.log('closed');
  });
});

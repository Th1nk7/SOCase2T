const http = require('http');
const dgram = require('dgram');
const fs = require('fs');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

  fs.writeFile('imageBuffer', msg, { encoding: 'base64' }, (err) => {
    if (err) throw err;
    console.log('Image data written to file');
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);

// Create an HTTP server
const httpServer = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      // Remove the data URL scheme prefix
      var base64Data = body.replace(/^data:image\/png;base64,/, "");
      server.emit('message', base64Data, { address: 'localhost', port: 41234 });
      res.end('ok');
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

httpServer.listen(8080, () => {
  console.log(`HTTP server listening on http://localhost:8080`);
});



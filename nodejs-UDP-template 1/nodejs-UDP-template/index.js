// Dette er modulerne der bruges fra Node.js
const express = require('express')
const app = express()
const http = require('http')

// Laver en http server
const server = http.createServer(app)

// Når http serveren modtager POST request sender den dataen over UDP
app.post('/', function (req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      var base64Data = body.replace(/^data:image\/png;base64,/, "");
      console.log(base64Data)
      sendUdp(base64Data)
      console.log("DATA SENT!")
      res.end('ok');
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
})

// Socket io kommunikerer med hjemmesiden, som hostes i public
const { Server } = require("socket.io")
const io = new Server(server)

// Porten der bruges er 4444
const port = 4444;
// Hoster mappen /public på porten 
app.use(express.static('public'))

// Lytter efter connections
server.listen(port, () => {
  console.log('client available on on *:4444');
})

// Når hjemmesiden er klar 
io.on('connection', (socket) => {
  console.log('a user connected')
  io.emit('ip', ip.address() + ":" + port)
})

// Modul dgram bruges
const udp = require('dgram')

// Viser ip'en der bliver hostet på
var ip = require('ip')
console.log(ip.address())

var udpSocket = udp.createSocket('udp4')


// Når den er klar til at få beskeder
udpSocket.on('listening', () => {
  var address = udpSocket.address()
  var port = address.port
  console.log('UDP Socket is listening at: ' + address.address + ":" + port);
})

// Når den får billedet fra UDP
udpSocket.on('message', (msg, info) => {  
  io.emit('udp-message', msg.toString())
})

// Hvis der skar en fejl
udpSocket.on('error', (err) => {
  console.log('socket error:\n' + err.stack);
  udpSocket.close()
});

// port, ip adresse, callback
udpSocket.bind(port,ip.address(),false);

// Funktion der sender data over UDP protokollen
const sendUdp = (message) => {
  udpSocket.send(message, port, ip.address("public","ipv4"), (error) => {
    if (error) {
      console.error(error);
      udpSocket.close();
    } else {
      console.log('Message sent successfully');
    }
  });
}
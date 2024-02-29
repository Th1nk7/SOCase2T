//currentpage skal pege på det side-id der skal være aktivt først (fra html filen) 
let udpDiv

function setup(){
  createCanvas(1000,1000)
  udpDiv = select('#udp-messages')
  var socket = io()
  socket.on('ip', (msg) => {
    select('#ip').html('IP adresse: ' + msg)
  })

  socket.on('udp-message', (msg)=>{
    loadImage('data:image/png;base64,' + msg, imageLoaded);
  })
}

function imageLoaded(img){
  image(img,0,0)
  console.log("image loaded")
  udpDiv.elt.scrollTop = udpDiv.elt.scrollHeight;
}
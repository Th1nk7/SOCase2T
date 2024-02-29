//currentpage skal pege på det side-id der skal være aktivt først (fra html filen) 
let udpDiv

function setup(){
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
  udpDiv.child(
    image(img,0,0)
  );
  udpDiv.elt.scrollTop = udpDiv.elt.scrollHeight;
}
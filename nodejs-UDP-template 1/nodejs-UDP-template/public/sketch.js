//currentpage skal pege på det side-id der skal være aktivt først (fra html filen) 
let udpDiv

function setup(){
  udpDiv = select('#udp-messages')
  var socket = io()
  socket.on('ip', (msg) => {
    select('#ip').html('IP adresse: ' + msg)
  })

  socket.on('udp-message', (msg)=>{
    udpDiv.child(
      var canvas = document.createElement("canvas");
      var img = document.createElement("img");
      img.src = 
    );
    udpDiv.elt.scrollTop = udpDiv.elt.scrollHeight 
  })
}






  
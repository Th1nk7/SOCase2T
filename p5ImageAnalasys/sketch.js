let img;

function preload() {
  img = loadImage('/../node-udp-server/imageBuffer');
}


function setup() {
  img.resize(windowWidth, 0);
}

function draw() {
  image(img, 0,0);

  loadPixels();

  console.log('the first five pixels in the image...');
  for (let x=0; x<5; x++) {
    let px = get(x, 0);
    console.log(px);
  }
}

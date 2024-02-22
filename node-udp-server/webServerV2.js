const fs = require('fs');
const getPixels = require('get-pixels');
const express = require('express');
const app = express();

let red;
let green;
let blue;

fs.readFile('imageBuffer', (err, buffer) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }

  getPixels(buffer, 'image/png', (err, pixels) => {
    if (err) {
      console.log('Error getting pixels:', err);
      return;
    }

    // Now you can work with the pixels
    let x = 50; // replace with your desired x coordinate
    let y = 100; // replace with your desired y coordinate
    let i = (y * pixels.shape[1] + x) * 4;
    red = pixels.data[i];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

    // Now you can use the color data
  });
});

app.get('/', (req, res) => {
    console.log(red+" "+blue+" "+green)
});

app.listen(3002, () => console.log('Server started on port 3002'));
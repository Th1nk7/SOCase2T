const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('imageBuffer', (err, data) => {
    if (err) {
      res.send('No image received yet.');
    } else {
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': data.length
      });
      res.end(data);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

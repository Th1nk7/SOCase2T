let img;
let rowOne = [];
let rowTwo = [];
let rowThree = [];
let rowFour = [];
let rowFive = [];
let rowSix = [];
let rowSeven = [];
let rowEight = [];
let rowNine = [];
let rowTen = [];
let rowOneAvgR = 0;
let rowOneAvgG = 0;
let rowOneAvgB = 0;
let rowTwoAvgR = 0;
let rowTwoAvgG = 0;
let rowTwoAvgB = 0;
let rowThreeAvgR = 0;
let rowThreeAvgG = 0;
let rowThreeAvgB = 0;
let rowFourAvgR = 0;
let rowFourAvgG = 0;
let rowFourAvgB = 0;
let rowFiveAvgR = 0;
let rowFiveAvgG = 0;
let rowFiveAvgB = 0;
let rowSixAvgR = 0;
let rowSixAvgG = 0;
let rowSixAvgB = 0;
let rowSevenAvgR = 0;
let rowSevenAvgG = 0;
let rowSevenAvgB = 0;
let rowEightAvgR = 0;
let rowEightAvgG = 0;
let rowEightAvgB = 0;
let rowNineAvgR = 0;
let rowNineAvgG = 0;
let rowNineAvgB = 0;
let rowTenAvgR = 0;
let rowTenAvgG = 0;
let rowTenAvgB = 0;

function preload() {
  //img = loadImage('/../node-udp-server/imageBuffer');
}

async function loadImageAsync () {
  img = await  loadImage('/../node-udp-server/imageBuffer');
  console.log('image loaded', img)
}

async function setup() {
  await loadImageAsync()
  console.log('After load')
  createCanvas(img.width,img.height)
  noLoop()
} 

async function draw() {
  image(img, 0,0);
  loadPixels();

  // FINDER VÆRDIER FOR RÆKKE 1
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10; x<img.width/10-1; x+=10) {
      let px = get(x, y);
      rowOne.push(px)
    }
  }

  // Røde værdier gennemsnit for række 1
  for(i in rowOne){
    rowOneAvgR += rowOne[i][0];
  }
  rowOneAvgR = Math.round(rowOneAvgR/rowOne.length)

  // Grønne værdier gennemsnit for række 1
  for(i in rowOne){
    rowOneAvgG += rowOne[i][1];
  }
  rowOneAvgG = Math.round(rowOneAvgG/rowOne.length)

  // Blå værdier gennemsnit for række 1
  for(i in rowOne){
    rowOneAvgB += rowOne[i][2];
  }
  rowOneAvgB = Math.round(rowOneAvgB/rowOne.length)
  console.log(rowOneAvgR+" "+rowOneAvgG+" "+rowOneAvgB)

  // FINDER VÆRDIER FOR RÆKKE 2
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10; x<img.width/10*2-1; x+=10) {
      let px = get(x, y);
      rowTwo.push(px)
    }
  }

  // Røde værdier gennemsnit for række 2
  for(i in rowTwo){
    rowTwoAvgR += rowTwo[i][0];
  }
  rowTwoAvgR = Math.round(rowTwoAvgR/rowTwo.length)

  // Grønne værdier gennemsnit for række 2
  for(i in rowTwo){
    rowTwoAvgG += rowTwo[i][1];
  }
  rowTwoAvgG = Math.round(rowTwoAvgG/rowTwo.length)

  // Blå værdier gennemsnit for række 2
  for(i in rowTwo){
    rowTwoAvgB += rowTwo[i][2];
  }
  rowTwoAvgB = Math.round(rowTwoAvgB/rowTwo.length)
  console.log(rowTwoAvgR+" "+rowTwoAvgG+" "+rowTwoAvgB)

  // FINDER VÆRDIER FOR RÆKKE 3
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*2; x<img.width/10*3-1; x+=10) {
      let px = get(x, y);
      rowThree.push(px)
    }
  }

  // Røde værdier gennemsnit for række 3
  for(i in rowThree){
    rowThreeAvgR += rowThree[i][0];
  }
  rowThreeAvgR = Math.round(rowThreeAvgR/rowThree.length)

  // Grønne værdier gennemsnit for række 3
  for(i in rowThree){
    rowThreeAvgG += rowThree[i][1];
  }
  rowThreeAvgG = Math.round(rowThreeAvgG/rowThree.length)

  // Blå værdier gennemsnit for række 3
  for(i in rowThree){
    rowThreeAvgB += rowThree[i][2];
  }
  rowThreeAvgB = Math.round(rowThreeAvgB/rowThree.length)
  console.log(rowThreeAvgR+" "+rowThreeAvgG+" "+rowThreeAvgB)

  // FINDER VÆRDIER FOR RÆKKE 4
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*3; x<img.width/10*4-1; x+=10) {
      let px = get(x, y);
      rowFour.push(px)
    }
  }

  // Røde værdier gennemsnit for række 4
  for(i in rowFour){
    rowFourAvgR += rowFour[i][0];
  }
  rowFourAvgR = Math.round(rowFourAvgR/rowFour.length)

  // Grønne værdier gennemsnit for række 4
  for(i in rowFour){
    rowFourAvgG += rowFour[i][1];
  }
  rowFourAvgG = Math.round(rowFourAvgG/rowFour.length)

  // Blå værdier gennemsnit for række 4
  for(i in rowFour){
    rowFourAvgB += rowFour[i][2];
  }
  rowFourAvgB = Math.round(rowFourAvgB/rowFour.length)
  console.log(rowFourAvgR+" "+rowFourAvgG+" "+rowFourAvgB)

  // FINDER VÆRDIER FOR RÆKKE 5
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*4; x<img.width/10*5-1; x+=10) {
      let px = get(x, y);
      rowFive.push(px)
    }
  }

  // Røde værdier gennemsnit for række 5
  for(i in rowFive){
    rowFiveAvgR += rowFive[i][0];
  }
  rowFiveAvgR = Math.round(rowFiveAvgR/rowFive.length)

  // Grønne værdier gennemsnit for række 5
  for(i in rowFive){
    rowFiveAvgG += rowFive[i][1];
  }
  rowFiveAvgG = Math.round(rowFiveAvgG/rowFive.length)

  // Blå værdier gennemsnit for række 5
  for(i in rowFive){
    rowFiveAvgB += rowFive[i][2];
  }
  rowFiveAvgB = Math.round(rowFiveAvgB/rowFive.length)
  console.log(rowFiveAvgR+" "+rowFiveAvgG+" "+rowFiveAvgB)

  // FINDER VÆRDIER FOR RÆKKE 6
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*5; x<img.width/10*6-1; x+=10) {
      let px = get(x, y);
      rowSix.push(px)
    }
  }

  // Røde værdier gennemsnit for række 6
  for(i in rowSix){
    rowSixAvgR += rowSix[i][0];
  }
  rowSixAvgR = Math.round(rowSixAvgR/rowSix.length)

  // Grønne værdier gennemsnit for række 6
  for(i in rowSix){
    rowSixAvgG += rowSix[i][1];
  }
  rowSixAvgG = Math.round(rowSixAvgG/rowSix.length)

  // Blå værdier gennemsnit for række 6
  for(i in rowSix){
    rowSixAvgB += rowSix[i][2];
  }
  rowSixAvgB = Math.round(rowSixAvgB/rowSix.length)
  console.log(rowSixAvgR+" "+rowSixAvgG+" "+rowSixAvgB)

  // FINDER VÆRDIER FOR RÆKKE 7
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*6; x<img.width/10*7-1; x+=10) {
      let px = get(x, y);
      rowSeven.push(px)
    }
  }

  // Røde værdier gennemsnit for række 7
  for(i in rowSeven){
    rowSevenAvgR += rowSeven[i][0];
  }
  rowSevenAvgR = Math.round(rowSevenAvgR/rowSeven.length)

  // Grønne værdier gennemsnit for række 7
  for(i in rowSeven){
    rowSevenAvgG += rowSeven[i][1];
  }
  rowSevenAvgG = Math.round(rowSevenAvgG/rowSeven.length)

  // Blå værdier gennemsnit for række 7
  for(i in rowSeven){
    rowSevenAvgB += rowSeven[i][2];
  }
  rowSevenAvgB = Math.round(rowSevenAvgB/rowSeven.length)
  console.log(rowSevenAvgR+" "+rowSevenAvgG+" "+rowSevenAvgB)

  // FINDER VÆRDIER FOR RÆKKE 8
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*7; x<img.width/10*8-1; x+=10) {
      let px = get(x, y);
      rowEight.push(px)
    }
  }

  // Røde værdier gennemsnit for række 8
  for(i in rowEight){
    rowEightAvgR += rowEight[i][0];
  }
  rowEightAvgR = Math.round(rowEightAvgR/rowEight.length)

  // Grønne værdier gennemsnit for række 8
  for(i in rowEight){
    rowEightAvgG += rowEight[i][1];
  }
  rowEightAvgG = Math.round(rowEightAvgG/rowEight.length)

  // Blå værdier gennemsnit for række 8
  for(i in rowEight){
    rowEightAvgB += rowEight[i][2];
  }
  rowEightAvgB = Math.round(rowEightAvgB/rowEight.length)
  console.log(rowEightAvgR+" "+rowEightAvgG+" "+rowEightAvgB)

  // FINDER VÆRDIER FOR RÆKKE 9
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*8; x<img.width/10*9-1; x+=10) {
      let px = get(x, y);
      rowNine.push(px)
    }
  }

  // Røde værdier gennemsnit for række 9
  for(i in rowNine){
    rowNineAvgR += rowNine[i][0];
  }
  rowNineAvgR = Math.round(rowNineAvgR/rowNine.length)

  // Grønne værdier gennemsnit for række 9
  for(i in rowNine){
    rowNineAvgG += rowNine[i][1];
  }
  rowNineAvgG = Math.round(rowNineAvgG/rowNine.length)

  // Blå værdier gennemsnit for række 9
  for(i in rowNine){
    rowNineAvgB += rowNine[i][2];
  }
  rowNineAvgB = Math.round(rowNineAvgB/rowNine.length)
  console.log(rowNineAvgR+" "+rowNineAvgG+" "+rowNineAvgB)

  // FINDER VÆRDIER FOR RÆKKE 10
  for(let y=10;y<img.height-1;y+=10){
    for (let x=10+img.width/10*9; x<img.width/10*10-1; x+=10) {
      let px = get(x, y);
      rowTen.push(px)
    }
  }

  // Røde værdier gennemsnit for række 10
  for(i in rowTen){
    rowTenAvgR += rowTen[i][0];
  }
  rowTenAvgR = Math.round(rowTenAvgR/rowTen.length)

  // Grønne værdier gennemsnit for række 10
  for(i in rowTen){
    rowTenAvgG += rowTen[i][1];
  }
  rowTenAvgG = Math.round(rowTenAvgG/rowTen.length)

  // Blå værdier gennemsnit for række 10
  for(i in rowTen){
    rowTenAvgB += rowTen[i][2];
  }
  rowTenAvgB = Math.round(rowTenAvgB/rowTen.length)
  console.log(rowTenAvgR+" "+rowTenAvgG+" "+rowTenAvgB)
}


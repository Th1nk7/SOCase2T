//currentpage skal pege på det side-id der skal være aktivt først (fra html filen) 
let udpDiv
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
let amp = 0;
let freq = 0;
let p = 0;
let colum = 1;
let frames = 0;


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
  frameRate(60)
  
}

function imageLoaded(img){
  image(img,0,0)
  console.log("image loaded")
  udpDiv.elt.scrollTop = udpDiv.elt.scrollHeight;
  
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
  frameRate(60)
  colum = 0
  frames = 1
  while(colum < 10){
    if(frames%30 === 0){
    colum ++
    if(colum == 1){
      amp = constrain(map(rowOneAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowOneAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowOneAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 2){
      amp = constrain(map(rowTwoAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowTwoAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowTwoAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 3){
      amp = constrain(map(rowThreeAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowThreeAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowThreeAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 4){
      amp = constrain(map(rowFourAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowFourAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowFourAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 5){
      amp = constrain(map(rowFiveAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowFiveAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowFiveAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 6){
      amp = constrain(map(rowSixAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowSixAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowSixAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 7){
      amp = constrain(map(rowSevenAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowSevenAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowSevenAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 8){
      amp = constrain(map(rowEightAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowEightAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowEightAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 9){
      amp = constrain(map(rowNineAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowNineAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowNineAvgB, 255, 0, -1, 1), -1, 1)
      }
      if(colum == 10){
      amp = constrain(map(rowTenAvgR, 255, 0, 0, 1), 0, 1)
      freq = constrain(map(rowTenAvgG, 255, 0, 100, 500), 100, 500)
      p = constrain(map(rowTenAvgB, 255, 0, -1, 1), -1, 1)
      }
      freq = Math.round(freq)
      console.log(colum)
  }
    
       console.log(amp+' :amp '+freq+' :freq '+p+' p')
    frames ++
  }
}
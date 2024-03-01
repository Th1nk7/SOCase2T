// Variabler
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
let amp = [];
let freq = [];
let p = [];
let Camp;
let Cfreq;
let Cp;
let Ccolum = 0;
let playing = false;
let osc
let cnv
let dropDown
let hOne = [],hTwo = [],hThree = [];
let CHOne = 0, CHTwo = 0, CHThree = 0


function setup(){
  // Laver canvas
  cnv = createCanvas(windowWidth,windowHeight);
  // Starter oscilatoren når mussen bliver klikket
  cnv.mousePressed(playOscillator);

  // Laver en dropdown hvor man kan vælge lydkurver
  dropDown = createSelect().position(20,125)
  dropDown.option('Sine')
  dropDown.option('Square')
  dropDown.option('Triangle')
  dropDown.option('Sawtooth')
  dropDown.input(handleType)
  
  var socket = io()

  socket.on('udp-message', (msg)=>{
    loadImage('data:image/png;base64,' + msg, imageLoaded);
  })
  frameRate(60)
  osc = new p5.Oscillator();
}

function imageLoaded(img){
  image(img,0,0)
  console.log("image loaded")
  
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

  amp[0] = constrain(map(rowOneAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[0] = constrain(map(rowOneAvgG, 255, 0, 500, 200), 200, 500)
  p[0] = constrain(map(rowOneAvgB, 255, 0, 1, -1), -1, 1)
  hOne[0] = rowOneAvgR
  hTwo[0] = rowOneAvgG
  hThree[0] = rowOneAvgB

  amp[1] = constrain(map(rowTwoAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[1] = constrain(map(rowTwoAvgG, 255, 0, 500, 200), 200, 500)
  p[1] = constrain(map(rowTwoAvgB, 255, 0, 1, -1), -1, 1)
  hOne[1] = rowTwoAvgR
  hTwo[1] = rowTwoAvgG
  hThree[1] = rowTwoAvgB

  amp[2] = constrain(map(rowThreeAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[2] = constrain(map(rowThreeAvgG, 255, 0, 500, 200), 200, 500)
  p[2] = constrain(map(rowThreeAvgB, 255, 0, 1, -1), -1, 1)
  hOne[2] = rowThreeAvgR
  hTwo[2] = rowThreeAvgG
  hThree[2] = rowThreeAvgB

  amp[3] = constrain(map(rowFourAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[3] = constrain(map(rowFourAvgG, 255, 0, 500, 200), 200, 500)
  p[3] = constrain(map(rowFourAvgB, 255, 0, 1, -1), -1, 1)
  hOne[3] = rowFourAvgR
  hTwo[3] = rowFourAvgG
  hThree[3] = rowFourAvgB

  amp[4] = constrain(map(rowFiveAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[4] = constrain(map(rowFiveAvgG, 255, 0, 500, 200), 200, 500)
  p[4] = constrain(map(rowFiveAvgB, 255, 0, 1, -1), -1, 1)
  hOne[4] = rowFiveAvgR
  hTwo[4] = rowFiveAvgG
  hThree[4] = rowFiveAvgB

  amp[5] = constrain(map(rowSixAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[5] = constrain(map(rowSixAvgG, 255, 0, 500, 200), 200, 500)
  p[5] = constrain(map(rowSixAvgB, 255, 0, 1, -1), -1, 1)
  hOne[5] = rowSixAvgR
  hTwo[5] = rowSixAvgG
  hThree[5] = rowSixAvgB

  amp[6] = constrain(map(rowSevenAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[6] = constrain(map(rowSevenAvgG, 255, 0, 500, 200), 200, 500)
  p[6] = constrain(map(rowSevenAvgB, 255, 0, 1, -1), -1, 1)
  hOne[6] = rowSevenAvgR
  hTwo[6] = rowSevenAvgG
  hThree[6] = rowSevenAvgB

  amp[7] = constrain(map(rowEightAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[7] = constrain(map(rowEightAvgG, 255, 0, 500, 200), 200, 500)
  p[7] = constrain(map(rowEightAvgB, 255, 0, 1, -1), -1, 1)
  hOne[7] = rowEightAvgR
  hTwo[7] = rowEightAvgG
  hThree[7] = rowEightAvgB

  amp[8] = constrain(map(rowNineAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[8] = constrain(map(rowNineAvgG, 255, 0, 500, 200), 200, 500)
  p[8] = constrain(map(rowNineAvgB, 255, 0, 1, -1), -1, 1)
  hOne[8] = rowNineAvgR
  hTwo[8] = rowNineAvgG
  hThree[8] = rowNineAvgB

  amp[9] = constrain(map(rowTenAvgR, 255, 0, 1, 0.2), 0.2, 1)
  freq[9] = constrain(map(rowTenAvgG, 255, 0, 500, 200), 200, 500)
  p[9] = constrain(map(rowTenAvgB, 255, 0, 1, -1), -1, 1)
  hOne[9] = rowTenAvgR
  hTwo[9] = rowTenAvgG
  hThree[9] = rowTenAvgB

  rowOneAvgR = 0    
  rowOneAvgG = 0    
  rowOneAvgB = 0

  rowTwoAvgR = 0    
  rowTwoAvgG = 0
  rowTwoAvgB = 0

  rowThreeAvgR = 0    
  rowThreeAvgG = 0    
  rowThreeAvgB = 0

  rowFourAvgR = 0    
  rowFourAvgG = 0    
  rowFourAvgB = 0

  rowFiveAvgR = 0    
  rowFiveAvgG = 0    
  rowFiveAvgB = 0

  rowSixAvgR = 0    
  rowSixAvgG = 0    
  rowSixAvgB = 0

  rowSevenAvgR = 0    
  rowSevenAvgG = 0    
  rowSevenAvgB = 0

  rowEightAvgR = 0    
  rowEightAvgG = 0    
  rowEightAvgB = 0

  rowNineAvgR = 0    
  rowNineAvgG = 0    
  rowNineAvgB = 0

  rowTenAvgR = 0    
  rowTenAvgG = 0    
  rowTenAvgB = 0

  rowOne=[]
  rowTwo=[]
  rowThree=[]
  rowFour=[]
  rowFive=[]
  rowSix=[]
  rowSeven=[]
  rowEight=[]
  rowNine=[]
  rowTen=[]


 
}

function draw(){

  if(frameCount%18 == 0){
    Camp = amp[Ccolum]
    Cfreq = Math.round(freq[Ccolum])
    Cp = p[Ccolum]
    CHOne = hOne[Ccolum]
    CHTwo = hTwo[Ccolum]
    CHThree = hThree[Ccolum]
    Ccolum ++
    console.log(CHOne)
  }
  if(Ccolum == 9){
    Ccolum = 0
  }
  console.log('amp: '+Camp+' freq: '+Cfreq+' pan: '+Cp)
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(Cfreq, 0.1);
    osc.amp(Camp, 0.1);
    osc.pan(Cp, 0.1);
  }
  
  fill('white')
  rect(width/4,height/2+height/4,100,-255)
  fill('red')
  rect(width/4,height/2+height/4,100,-CHOne);

  fill('white')
  rect(width/2,height/2+height/4,100,-255)
  fill('green')
  rect(width/2,height/2+height/4,100,-CHTwo);

  fill('white')
  rect(width/2+width/4,height/2+height/4,100,-255)
  fill('blue')
  rect(width/2+width/4,height/2+height/4,100,-CHThree);
}

function playOscillator() {
  osc.start();
  playing = true;
}


function handleType(){
  osc.setType( dropDown.value() )
}
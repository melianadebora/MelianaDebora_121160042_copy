class tatasurya {
  constructor(luas, jarak, sudut, cepat){
    this.luas = luas;
    this.jarak = jarak;
    this.sudut = sudut;
    this.cepat = cepat;
  }
}

let v = 3;
let rotasibulan = 1;
const sun = new tatasurya(25,0,0,0);
const mercury = new tatasurya(10,30,1,1*v)
const venus = new tatasurya(16,50,1,1/2*v)
const earth = new tatasurya(17,75,1,1/3*v);
const mars = new tatasurya(13,90,1,1/4*v)
const jupiter = new tatasurya(26,125,1,1/5*v)
const saturn = new tatasurya(23,160,1,1/6*v)
const uranus = new tatasurya(21,180,1,1/7*v)
const neptune = new tatasurya(19,200,1,1/8*v)

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  
  sunShow();
  mercuryShow();
  venusShow();
  earthShow();
  marsShow();
  jupiterShow();
  saturnShow();
  uranusShow();
  neptuneShow();
}

//Sun
function sunShow(){
  noStroke();
  fill('yellow');
  circle(sun.jarak,sun.jarak,sun.luas);
}


//Merkurius
function mercuryShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,85);
  rotate(mercury.sudut);
  noStroke();
  fill('red');
  circle(mercury.jarak,mercury.jarak,mercury.luas);
  pop();
  mercury.sudut += mercury.cepat;
}

//Venus
function venusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('white');
  noFill();
  circle(0,0,142);
  rotate(venus.sudut);
  noStroke();
  fill('blue');
  circle(venus.jarak,venus.jarak,venus.luas);
  pop();  
  venus.sudut += venus.cepat;
}

//Bumi
function earthShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('white');
  noFill();
  circle(0,0,212);
  
  rotate(earth.sudut);
  noStroke();
  fill('pink');
  circle(earth.jarak,earth.jarak,earth.luas);
  earth.sudut += earth.cepat;
  
  //Bulan
  fill('white');
  translate(earth.jarak,earth.jarak);
  rotate(rotasibulan);
  circle(10,10,5);
  pop()
  rotasibulan += 1
}


//Mars
function marsShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('white');
  noFill();
  circle(0,0,254);
  
  //sabuk orbit
  strokeWeight(10);
  stroke('grey');
  noFill();
  circle(0,0,300);

  //planet
  rotate(mars.sudut);
  noStroke();
  fill('green');
  circle(mars.jarak,mars.jarak,mars.luas);
  pop();
  mars.sudut += mars.cepat;
}

//Jupiter
function jupiterShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('crimson');
  noFill();
  circle(0,0,355);

  //planet
  rotate(jupiter.sudut);
  noStroke();
  fill('#EE3F08');
  circle(jupiter.jarak,jupiter.jarak,jupiter.luas);
  pop();
  jupiter.sudut += jupiter.cepat;
}

//Saturnus
function saturnShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('gold');
  noFill();
  circle(0,0,452);

  //planet
  rotate(saturn.sudut);
  noStroke();
  fill('white');
  circle(saturn.jarak,saturn.jarak,saturn.luas);
  
  //cincin
  noFill();
  stroke('orange');
  ellipse(saturn.jarak,saturn.jarak,50,20);
  pop();
  saturn.sudut += saturn.cepat;
}

//Uranus
function uranusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('silver');
  noFill();
  circle(0,0,510);

  //planet
  rotate(uranus.sudut);
  noStroke();
  fill('pink');
  circle(uranus.jarak,uranus.jarak,uranus.luas);
  pop();
  uranus.sudut += uranus.cepat;
}

//Neptunus
function neptuneShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('blue');
  noFill();
  circle(0,0,565);

  //planet
  rotate(neptune.sudut);
  noStroke();
  fill('green');
  circle(neptune.jarak,neptune.jarak,neptune.luas);
  pop();
  neptune.sudut += neptune.cepat;
}
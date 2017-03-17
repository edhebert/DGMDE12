var canvas, myPara;


function setup() {
  canvas = createCanvas(600, 400);
  background(51);
  fill(255);
  myPara = createP("I'm a paragraph, added with P5JS!");
  createElement("h3","I'm an H3 element created using the P5 createElement() function!");
  canvas.position(400,400);
}

function draw() {
  ellipse(width/2, height / 2, 100, 100);
}

function mousePressed() {
  myPara.html('Hey, the mouse was pressed!');
}

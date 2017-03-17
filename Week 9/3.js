// use a P5 sketch as a full page background

function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);

    canvas.position(0,0);

    canvas.style("z-index", "-1");

    background(170, 237, 161);
    fill(255, 240, 165, 30);
    noStroke();
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(170, 237, 161);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 30, 30);
}

function keyPressed() {
  background(170, 237, 161);
  // clear();
}

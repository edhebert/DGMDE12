// an HTML button we can press
var myButton;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(128);

  // Create a button we can press
  myButton = createButton("Click me to change circle color");

  // when the button is pressed, "Call back" a function to run
  myButton.mousePressed(changeColor);

  // we could also use an "anonymous" callback function
  // myButton.mousePressed(function() {
  //   fill(random(256), random(256), random(256));
  // });
}

function draw() {
  ellipse(width / 2, height / 2, 200, 200);
}

function changeColor() {
  // assign a new fill color
  fill(random(256), random(256), random(256));
}

var redSlider, greenSlider, blueSlider;

var redValue, greenValue, blueValue;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // create three slider elements to adjust color properties
  // createSlider(min,max,value,step)

  redSlider = createSlider(0, 255, 128, 1);
  greenSlider = createSlider(0, 255, 128, 1);
  blueSlider = createSlider(0, 255, 128, 1);

  redValue = createP();
  greenValue = createP();
  blueValue = createP();
}

function draw() {
  fill(redSlider.value(), greenSlider.value(), blueSlider.value());
  ellipse(width / 2, height / 2, 200, 200);

  // change values of paragraphs based on slider value
  redValue.html("The red value is " + redSlider.value());
  greenValue.html("The green value is " + greenSlider.value());
  blueValue.html("The blue value is " + blueSlider.value());

}

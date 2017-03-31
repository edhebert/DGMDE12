// DGMD E12 Week 11, Part 3
// Working with individual pixel values

var whodunit, milo;

// preload loads assets before sketch begins!
function preload() {
  whodunit = loadImage("assets/whodunit692x517.png");
  milo = loadImage("assets/milo.jpg");
}

function setup() {
  // create canvas the same size as the images
  createCanvas(692,517);

}

function draw() {
  noLoop();
  // show the 'before' image
  image(whodunit, 0, 0);
  whodunit.loadPixels();
  // go through each row
  for (var y = 0; y < height; y++) {
    // and each column
    for(var x = 0; x < width; x++) {
      // go through EVERY individual pixel's R, G, B, and A
      var index = (x + y * width) * 4;
      // if the pixel's red value is 255, make it white (removing all the red from the image)
      if (whodunit.pixels[index + 0] > 250) {
        whodunit.pixels[index + 0] = 255;
        whodunit.pixels[index + 1] = 255;
        whodunit.pixels[index + 2] = 255;
      } else {
        // make the pixels black
        whodunit.pixels[index + 0] = 0;
        whodunit.pixels[index + 1] = 0;
        whodunit.pixels[index + 2] = 0;
      }
      // keep the alpha as is
      // whodunit.pixels[index + 3] is untouched
    }
  }
  whodunit.updatePixels();
  // display the image
  // image(whodunit, 0, 0);
  // who did it again?!?!
  // image(milo, 0, 0);
}

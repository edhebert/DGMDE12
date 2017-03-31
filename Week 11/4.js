// DGMD E12 Week 11, Part 4
// A simplified manipulation of the pixel array

var  milo;

// preload loads assets before sketch begins!
function preload() {
  milo = loadImage("assets/milo.jpg");
}

function setup() {
  // create canvas the same size as the images
  createCanvas(692,517);

}

function draw() {
  // show the 'before' image
  milo.loadPixels();
  // go through each row
  for (var y = 0; y < height; y++) {
    // and each column
    for(var x = 0; x < width; x++) {
      // go through EVERY individual pixel's R, G, B, and A
      var index = (x + y * width) * 4;
        // mess with the RGBa values!
        milo.pixels[index] = x; // red
        // milo.pixels[index + 1] = 255 // green
        milo.pixels[index + 2] = y; // blue
        milo.pixels[index + 3] = random(255); // alpha
    }
  }
  milo.updatePixels();
  image(milo, 0, 0);
}

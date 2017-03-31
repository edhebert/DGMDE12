// DGMD E12 Week 11, Part 2
// Working with get() and set()

var poppy, poppy2;

// preload loads assets before sketch begins!
function preload() {
  poppy = loadImage("assets/poppy800x500.jpg");
}

function setup() {
  // create canvas the same size as the images
  createCanvas(800,500);
  // a new image
  poppy2 = createImage(width, height);
  // image(poppy,0,0);
}

function draw() {
  noLoop();
  poppy2.loadPixels();
  // go through each row
  for (var y = 0; y < height; y++) {
    // and each column
    for (var x = 0; x < width; x++) {
      // get the pixel value for that location
      var myPixel = poppy.get(x, y);
      // set it to the opposite (invert the image)
      poppy2.set(width - x, height - y, myPixel);
    }
  }
  poppy2.updatePixels();
  image(poppy2, 0, 0);
}

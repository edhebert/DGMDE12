// DGMD E12 Week 11, Part 1
// Working with Images and Pixel data

var poppy, branch, imgMask;

// preload loads assets before sketch begins!
function preload() {
  poppy = loadImage("assets/poppy800x500.jpg");
  branch = loadImage("assets/branch800x500.jpg");
  imgMask = loadImage("assets/mask800x500.png");
}

function setup() {
  // create canvas the same size as the images
  createCanvas(800,500);
  poppy.mask(imgMask);
}

function draw() {
  // show a bright red background
  background('red');
  // draw branch(he'll get overwritten by poppy)
  image(branch, 0, 0);
  // draw poppy (then activate her mask)
  // image(poppy, 0, 0);
  // or put her at the mouse location instead
  image(poppy, mouseX, mouseY);

}

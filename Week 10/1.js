// DGMD E12 Week 10, Part 1
// Working with JSON data

// Create a page linking to various guitar companies


// global variable to hold our JSON data
var guitars;

// preload loads assets before sketch begins!
function preload() {
  guitars = loadJSON("guitars.json");
}

function setup() {
  // we don't need a canvas, don't draw one!
  noCanvas();

  // get the manufacturers from the JSON file
  var manufacturers = guitars.companies;

  // iterate through every manufacturer, get name and url
  for (var i = 0; i < manufacturers.length; i++) {
    createP('<a href ="' + manufacturers[i].url + '">' + manufacturers[i].name + '</a>');
    // if the data key has spaces, use bracket notation
    createP('Founded in ' + manufacturers[i]["country founded in"]);
  }
}

function draw() {
  // not needed for this sketch
}

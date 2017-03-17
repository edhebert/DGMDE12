var canvas;

function setup() {
  canvas = createCanvas(600, 400);
  background(51);
  fill(255);

  // assign the canvas the parent element #canvasHolder
  canvas.parent("#canvasHolder");

  // create a new div with the ID of "textHolder"
  var myTextHolder = createDiv('').id('textHolder');

  // select every <p> on the page
  var myParas = selectAll('p');

  // loop through all the paragraphs, and assign them as a child of myTextHolder
  for (var i = 0; i < myParas.length; i++) {
    // assign every paragraph as a child of myTextHolder
    myTextHolder.child(myParas[i]);

    // this would also work! assign every paragraph the parent element "myTextHolder"
    // myParas[i].parent(myTextHolder);
  }

  // change the color of myTextHolder
  myTextHolder.style("color", "red");

}

// var angle = 0;

function draw() {
  ellipse(width/2, height / 2, 100, 100);

}

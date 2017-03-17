var canvas;
var mySelection;

function setup() {
  createCanvas(600, 400);
  background(51);
  fill(255);

  // 'select' will only select ONE element (either an ID, or the first of a tag or class)
  mySelection = select("#myID");
  // mySelection = select("p");

  // mySelection.style("color","red");
  mySelection.style("color: red; font-size: 20px; font-weight: bold;");
  // [uncomment mySelection.style in draw()]


  // selectAll will select ALL elements of a type or class, and return an ARRAY!
  // you have to iterate through that ARRAY

  // mySelection = selectAll("p");

  // mySelection.style("color","red"); // ain't gonna work!

  // for (var i = 0; i < mySelection.length; i++) {
  //   mySelection[i].style("color: red; font-size: 20px; font-weight: bold;");
  // }

}

// var angle = 0;

function draw() {
  ellipse(width/2, height / 2, 100, 100);

  // mySelection.style("font-size", mouseX + "px");

  // mySelection.style("rotate",angle);
  // angle++;
}

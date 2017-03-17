var friends = ["Jane", "Daniel", "Marcio", "Rebecca", "Brandon"];

function setup() {
  // not needed this time
}

function draw() {

  // grab a random index from the array
  var index = floor(random(friends.length));

  // create a new paragraph using someone's name from the array
  var newpara = createP("Hi there, " + friends[index] + "!");

  // pepper the screen with people's names!
  newpara.position(random(windowWidth), random(windowHeight));
}

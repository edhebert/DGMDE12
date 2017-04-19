// variable to hold our microphone audio
var mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // capture microphone audio via the p5.AudioIn capability
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    var micLevel = mic.getLevel();
    ellipse(width / 2, height / 2, width, micLevel * 1000);
}

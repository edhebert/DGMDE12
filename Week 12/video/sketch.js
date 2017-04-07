// Sketch that loads pixels from video into P5 canvas, and uses video pixel data to manipulate ellipse color and size.

// Ed Hebert - 12/19/2016

var myVideo;

function preload() {
    // capstone video sample (note different formats for different browsers!)
    // myVideo = createVideo(['assets/2015capstonefair.webm', 'assets/2015capstonefair.mp4']);

    // looping background (this external player export is possible with Vimeo Pro)
    myVideo = createVideo('https://player.vimeo.com/external/199409627.hd.mp4?s=970637c39263af2a9bc21ef1e62aa30d995cc8da');
}

function setup() {
    // deal with pixel density on retina browsers (normailze everything to low resolution)
    pixelDensity(1);

    var canvas = createCanvas(1280, 720);
    // put the canvas at the top of the page
    canvas.parent('#canvas');

    // don't want the audio
    myVideo.volume(0);

    // loop the video when it gets to the end
    myVideo.loop();

    // hide the HTML5 video (only show the canvas)
    // myVideo.hide();

    noStroke();

}

function draw() {
    background(255);
    myVideo.loadPixels();

    // map the range of mouseX values from 10 to 80 in size
    var stepSize = round(map(mouseX, 0, width, 10, 80));

    for (var y = 0; y < height; y += stepSize) {
        for (var x = 0; x < width; x += stepSize) {

            // formula for finding the x,y pixel coordinates in a one-dimensional pixel array
            var i = (y * width + x) * 4;

            // calculate brightness (R+G+B / 3)
            var pixelBrightness = (myVideo.pixels[i] + myVideo.pixels[i + 1] + myVideo.pixels[i + 2]) / 3;

            // set ellipse radius based on relative darkness of pixel
            var darkness = (255 - pixelBrightness) / 255;
            var radius = stepSize * darkness;

            // provide fill color (either B&W or RGB color)
            fill(myVideo.pixels[i], myVideo.pixels[i + 1], myVideo.pixels[i + 2]);
            // fill(pixelBrightness);

            ellipse(x, y, radius, radius);
        }
    }
}

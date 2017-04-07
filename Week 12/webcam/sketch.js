var myVideo;

function setup() {
    createCanvas(640, 480);
    // specify multiple formats for different browsers
    myVideo = createCapture(VIDEO);
    // myVideo = createVideo(['assets/2015capstonefair.webm','assets/2015capstonefair.mp4']);
    // myVideo.loop();
    // myVideo.hide();
    ellipseMode(CENTER);
    noStroke();
    // $('canvas').css('transform','scale(' + window.innerWidth / 1280 + ')');
    // console.log(windowWidth / 1280 +', ' + windowHeight / 720);
}

function draw() {
    background(255);
    myVideo.loadPixels();
    var stepSize = round(map(mouseX, 0, windowWidth, 10, 80));
    // var stepSize = round(constrain(mouseX / 10, 10, 80));
    for (var y = 0; y < height; y += stepSize) {
        for (var x = 0; x < width; x += stepSize) {

            // calculate pixel position in a linear array of pixels
            var i = (y * width + x) * 4;
            // set ellipse radius based on darkness of pixel
            var darkness = (255 - myVideo.pixels[i]) / 255;
            var radius = stepSize * darkness;
            // provide RGB color
            fill(myVideo.pixels[i], myVideo.pixels[i + 1], myVideo.pixels[i + 2]);
            ellipse(x, y, radius, radius);
        }
    }
}

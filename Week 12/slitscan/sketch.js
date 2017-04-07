// SlitScan - grab one pixel column of live video and paint it acrodd the canvas

// global variable to hold the X position of the 'slit scan'
var x = 0;
var myVideo;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // grab the webcam feed as input
    myVideo = createCapture(VIDEO);
    // my webcam is 640 x 480, but you can resize the input to lower rez (faster)
    // myVideo.size(320, 240);
    background(51);
    myVideo.hide();
}

function draw() {
    // load the pixels from the video for use in P5 canvas
    myVideo.loadPixels();
    // copy from (source), x, y, w, h, to destination x, y, w, h
    var vw = 640 / 2;
    // grab a 1-pixel wide slit from the video, put it in the canvas at location (scanCol, 0)
    copy(myVideo, vw, 0, 1, 480, x, 0, 1, height);
    // increment x - reset if it extends past the canvas width
    if (x < width)
        x++;
    else
        x = 0;
}

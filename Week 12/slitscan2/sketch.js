// SlitScan - grab one pixel column of live video and paint it acrodd the canvas

// global variable to hold the X position of the 'slit scan' and canvasX
var scanX = 0, canvasX = 0;
var videoWidth, videoHeight;


function setup() {
    createCanvas(windowWidth, windowHeight);

    // grab the webcam feed as input
    myVideo = createCapture(VIDEO);

    // my built-in webcam is 640 x 480
    videoWidth = 640;
    videoHeight = 480;

    background(51);
    myVideo.hide();
}

function draw() {
    // load the pixels from the video for use in P5 canvas
    myVideo.loadPixels();

    // map the video width to the canvas width (for scanner)
    canvasX = map(scanX, 0, videoWidth, 0, width);
    // copy from (source), x, y, w, h, to destination x, y, w, h
    copy(myVideo, scanX, 0, 1, videoHeight, canvasX, 0, 1, height);

    // increment x - reset if it extends past the canvas width
    if (scanX < videoWidth)
        scanX++;
    else
        scanX = 0;
}

var song;
var sliderRate, sliderPan, sliderVolume, button;


function setup() {
  // don't really need a canvas unless we want to map audio to visuals
  noCanvas();
  song = loadSound("copland-spring.mp3", loaded);

  // create sliders to adjust play rate, pan, and volume
  createDiv("Rate ");
  sliderRate = createSlider(-1, 1.5, 1, 0.01);
  createDiv("Pan ");
  sliderPan = createSlider(-1, 1, 0, 0.01);
  createDiv("Volume ");
  sliderVolume = createSlider(0, 1, 0.5, 0.01);

  // button to toggle play/pause
  button = createButton('play / pause');

  button.mousePressed(function() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  });
}

// callback function for loadSound
function loaded() {
  song.play();
}

function draw() {
  // adjust various audio properties from slider data
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
  song.setVolume(sliderVolume.value());
}

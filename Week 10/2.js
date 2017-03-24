// DGMD E12 Week 10, Part 2
// Query an API

// Grab the temperature at any zip code

// a variable to hold our weather data
var weather;

// the entire url to the API is http://api.openweathermap.org/data/2.5/weather?zip=02138&appid=9403c54be6d59f673cb4eca792598bb1&units=imperial
// we're going to break that up so we can piece together data input from the user

var api = "http://api.openweathermap.org/data/2.5/weather?zip="

// the zipcode value will come from user input
var zip;

// my API key (that I got from openweathermap.org)
var apikey = '&appid=9403c54be6d59f673cb4eca792598bb1';

var units = "&units=imperial";


function setup() {
  createCanvas(300, 300);

  // select the button element on the page
  var button = select('#submit');
  // when the button is pressed, run the getTemp function
  button.mousePressed(getTemp);

  getTemp();
}

// gets the temperature of the location of interest (based on zip code)
function getTemp() {

  zip = select('#zipcode').value();

  // concatenate all the strings together to make the url
  var url = api + zip + apikey + units;


  // get data, call a callback function we called 'gotData' when data received
  loadJSON(url, gotData);
}

// the callback from loadJSON sends 'data' automatically!
function gotData(myData) {
  weather = myData;
}

function draw() {
  // draw a circle based on the temperature at the desired location
  background(100);

  // if we've received weather data (from gotData)
  if (weather) {
    // make the temperature value the radius rather than diameter
    ellipseMode(RADIUS);

    var myTemp = weather.main.temp;
    // if temperature is above 40 draw red circle, else blue
    if (myTemp >= 40) {
      fill('red');
    } else {
      fill('blue');
    }
    // draw circle in center of canvas, temperature as radius
    ellipse(width / 2, height / 2, myTemp, myTemp);

    // add the name of the city atop the ellipse
    fill('white');
    textAlign(CENTER, CENTER);
    text(weather.name,width / 2, height / 2);
  }
}

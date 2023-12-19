var i = 0;
var imageFiles = ['cover1.png', 'cover2.jpg', 'cover6.jpg', 'cover5.jpg', 'cover4.jpg'];

// Set up an interval to change the slider image every 2 seconds
setInterval(startSlider, 2000);

function startSlider() {
  var slideElement = document.getElementById("slide1");
  // Check if the element exists before modifying its attribute
  if (slideElement) {
    slideElement.src = "images/" + imageFiles[i];
    i++;
    if (i > 3) {
      i = 0;
    }
  }
}

var today = new Date();
var newElement = document.getElementById("new");
if (newElement) {
  newElement.innerHTML = today.toDateString();
}

var hour = today.getHours();
var greet;
if (hour >= 18) {
  greet = "Good Evening";
} else if (hour >= 12) {
  greet = "Good Afternoon";
} else {
  greet = "Good Morning";
}

var greetingElement = document.getElementById("greeting");
if (greetingElement) {
  greetingElement.innerHTML = greet;
}

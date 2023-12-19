// Declare a variable to keep track of the current index
var currentIndex = 0;

// Create an array of objects containing image names and corresponding descriptions
var slides = [
  {
    name: "Welcome Program",
    imgfile: "a2.jpg"
  },
  {
    name: "Tshirt Inauguration Program",
    imgfile: "a3.jpg"
  },
  {
    name: "D'Village Program",
    imgfile: "a1.jpg"
  },
  {
    name: "Winner Of the Changa Chait",
    imgfile: "a4.jpg"
  },
  {
    name: "Youth Group",
    imgfile: "a5.jpg"
  }
];

// Set an interval to call the Start function every 2000 milliseconds (2 seconds)
setInterval(Start, 2000);

// Function to update the slideshow
function Start() {
  // Get the HTML elements by their IDs
  var sliderImage = document.getElementById("aboutslider");
  var aboutText = document.getElementById("abouttext");
  
  // Update the image source and text using the current index
  sliderImage.src = "images/about/" + slides[currentIndex].imgfile;
  aboutText.innerHTML = slides[currentIndex].name;
  
  // Increment the index and loop back to the beginning if necessary
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
}
var maxAttempts = 3; // Maximum number of login attempts
var validAttempts = maxAttempts; // Initialize valid attempts counter

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Empty field validation
  if (username === "") {
    alert("User Name Should not be empty");
    return false;
  }
  if (password === "") {
    alert("Password should not be empty");
    return false;
  }

  // Check if name and password match
  if (username === "roila" && password === "youth") {
    window.location.href = "new.html";
    alert("You have Logged into the Website");
    return false;
  } else {
    validAttempts--;

    // Display remaining attempts or disable fields
    var errorElement = document.getElementById("error");
    if (errorElement) {
      if (validAttempts > 0) {
        errorElement.innerHTML =
          "Incorrect username and password. You have left " +
          validAttempts +
          " attempt(s).";
      } else {
        errorElement.innerHTML = "You have exceeded the maximum number of attempts.";
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
      }
    }

    return false;
  }
}

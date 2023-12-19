 function checkFormEntry() {
	var errors = "";
	var errorMessage = document.getElementById("errorMessage");
	var successMessage = document.getElementById("successMessage");
  
	errorMessage.innerHTML = "";
	successMessage.innerHTML = "";
  
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var phone = document.getElementById("phone");
	var address = document.getElementById("address");
	var email = document.getElementById("email");
	var eduLevel = document.getElementById("edu-level");
  
	if (fname.value.length < 3) {
	  errors += "First name must have at least 3 characters.<br>";
	}
  
	if (lname.value.length < 5) {
	  errors += "Last name must have at least 5 characters.<br>";
	}
  
	if (phone.value.length !== 10) {
	  errors += "Phone number must contain exactly 10 digits.<br>";
	}
  
	if (address.value.length < 5) {
	  errors += "Address must have at least 5 characters.<br>";
	}
  
	if (!validateEmail(email.value)) {
	  errors += "Enter a valid email address.<br>";
	}
  
	if (eduLevel.value === "") {
	  errors += "Please select your level.<br>";
	}
  
	if (errors !== "") {
	  errorMessage.innerHTML = errors;
	  return false;
	} else {
	  // Display a success message
	  successMessage.innerHTML = "You have successfully signed up!";
	  // Commenting out the alert to use the success message
	  // window.alert("YOU HAVE SUCCESSFULLY SIGNED UP!! THANK YOU!!");
	  // Redirect to a new page
	  window.location.href = "new.html";
	  return false;
	}
  }
  
  function validateEmail(email) {
	// A simple email validation pattern
	var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(email);
  }
  
  document.getElementById("form").onsubmit = checkFormEntry;
  
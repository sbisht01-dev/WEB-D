console.log("submit");
function validateForm() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  if (name.length < 6) {
    alert("Name must be at least 6 characters");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Phone number validation
  if ((phone.length = 10)) {
    alert("Phone number must be at least 10 digits");
    return false;
  }

  return true;
}

let button = document.getElementById("submit");
button.addEventListener("click", validateForm);

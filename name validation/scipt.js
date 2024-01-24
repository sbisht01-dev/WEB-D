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

  // Add additional validation for other fields if needed

  return true;
}

let button = document.getElementById("submit");
button.addEventListener("click", validateForm);

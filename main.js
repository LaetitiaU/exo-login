

let checkBox = document.getElementById("toggle-password-visibility");
let password = document.getElementById("password");

checkBox.addEventListener('change', function() {
  if (this.checked) {
    password.setAttribute("type", "text")
  } else {
    password.setAttribute("type", "password")
  }
});
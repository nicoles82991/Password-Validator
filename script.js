// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

const passlabel = document.getElementById("passlabel");
const passinput = document.getElementById("passinput");
const checkbox = document.getElementById("checkbox");
const error = document.getElementById("error");
const userlabel = document.getElementById("userlabel");
const userinput = document.getElementById("userinput");
const submit = document.getElementById("submitbtn");
const eye = document.getElementById("checkboxeye");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    eye.classList.add("checked");
    eye.classList.remove("unchecked");
    passinput.setAttribute("type", "text");
  } else {
    eye.classList.add("unchecked");
    eye.classList.remove("checked");
    passinput.setAttribute("type", "password");
  }
});

function checkpass() {
  let pass = passinput.value;
  let usern = userinput.value;
  isValidPassword(pass, usern);
}

submit.addEventListener("click", function () {
  checkpass();
});

passinput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkpass();
  }
});

userinput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkpass();
  }
});

function isValidPassword(pass, usern) {
  if (pass.length > 8 && pass !== usern && !pass.includes(" ")) {
    error.style.color = "green";
    error.textContent = "Valid password!";
  } else {
    error.style.color = "rgb(239, 79, 79)";
    error.textContent = "Please input a valid password.";
  }
}

//i also want to toggle the password dots with the checkbox

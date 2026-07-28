// Day 47
// Registration Form Validation

let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let button = document.getElementById("registerBtn");
let result = document.getElementById("result");

button.addEventListener("click", function () {

    let name = userName.value;
    let email = userEmail.value;

    if (name.length <= 0 || email.length <= 0) {
        console.log("Error: the user did not fill in all fields.");
        result.innerText = "Please fill in all fields.";
    } else {
        console.log("Registration completed successfully.");
        result.innerText = `Welcome, ${name}!`;
    }

    userName.value = "";
    userEmail.value = "";

});

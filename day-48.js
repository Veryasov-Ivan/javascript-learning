// Day 48
// Password Visibility Toggle

let passwordInput = document.getElementById("password");
let button = document.getElementById("buttonShow");
let statusBut = document.getElementById("textP");
let isVisible = false;

button.addEventListener("click", function () {

    if (isVisible === false) {
        passwordInput.type = "text";
        button.innerText = "Hide Password";
        statusBut.innerText = "Password is visible.";
        isVisible = true;
    } else {
        passwordInput.type = "password";
        button.innerText = "Show Password";
        statusBut.innerText = "Password is hidden.";
        isVisible = false;
    }
});

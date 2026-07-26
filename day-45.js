// Day 45

let usernameInput = document.getElementById("user_name");
let passwordInput = document.getElementById("user_pass");
let signIn = document.getElementById("sign_in");

const CORRECT_LOGIN = "admin";
const CORRECT_PASSWORD = "12345678";

signIn.addEventListener("click", function(event) {

    event.preventDefault();

    let login = usernameInput.value;
    let password = passwordInput.value;

    if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
        console.log("Access granted!");
        alert("Welcome, admin!");
    } else {
        console.log("Error: invalid credentials.");
        alert("Invalid login or password.");
    }
});

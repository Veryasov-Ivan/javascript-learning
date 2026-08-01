// Day 51
// Age Checker

let inputInput = document.getElementById("input");
let status = document.getElementById("status");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    let age = inputInput.value;

    if (age.length === 0) {
        status.innerText = "Status: Please enter your age.";
    } else if (age <= 17) {
        status.innerText = "Status: Access denied.";
    } else {
        status.innerText = "Status: Access granted.";
    }
});

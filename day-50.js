// Day 50
// Username Preview

let usernameInput = document.getElementById("main-input");
let p = document.getElementById("main-p");

usernameInput.addEventListener("input", function() {
    let usertext = usernameInput.value;

    if (usertext.length === 0) {
        p.innerText = `Your username: Guest`;
    } else {
        p.innerText = `Your username: ${usertext}`;
    }
});

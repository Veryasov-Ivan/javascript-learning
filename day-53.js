// Day 53
// Theme Switcher & Live Greeting

let button = document.getElementById("button");
let paragraph = document.getElementById("main-p");
let isDark = false;
let mainBlock = document.getElementById("main-block");
let block2 = document.getElementById("block-2");

button.addEventListener("click", function () {
    if (isDark === false) {
        paragraph.innerText = "Current theme: Dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.innerText = "Enable Light Mode";
        mainBlock.style.borderColor = "white";
        block2.style.borderColor = "white";
        isDark = true;
    } else {
        paragraph.innerText = "Current theme: Light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.innerText = "Enable Dark Mode";
        mainBlock.style.borderColor = "black";
        block2.style.borderColor = "black";
        isDark = false;
    }
});

let inputInput = document.getElementById("input-1");
let paragraph2 = document.getElementById("p-2");

inputInput.addEventListener("input", function () {
    let username = inputInput.value;

    if (username.length === 0) {
        paragraph2.innerText = "Hello, Guest!";
    } else {
        paragraph2.innerText = `Hello, ${username}!`;
    }
});

// Day 52
// Theme Switcher

let button = document.getElementById("button");
let paragraph = document.getElementById("main-p");
let isDark = false;

button.addEventListener("click", function () {
    if (isDark === false) {
        paragraph.innerText = "Current theme: Dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.innerText = "Enable Light Mode";
        isDark = true;
    } else {
        paragraph.innerText = "Current theme: Light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.innerText = "Enable Dark Mode";
        isDark = false;
    }
});

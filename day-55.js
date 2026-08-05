// Day 55
// Secret Message

let button = document.getElementById("but-1");
let message = document.getElementById("p-1");
let isHidden = true;

button.addEventListener("dblclick", function() {
    if (isHidden === true) {
        button.innerText = "Hide Secret";
        message.innerText = "Secret: JavaScript is awesome!";
        isHidden = false;
    } else {
        button.innerText = "Reveal Secret";
        message.innerText = "Secret: Hidden";
        isHidden = true;
    }
});

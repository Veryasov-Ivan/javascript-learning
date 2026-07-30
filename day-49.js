// Day 49 
// Character Counter

let textInput = document.getElementById("text-input");
let number = document.getElementById("num-cha");

textInput.addEventListener("input", function() {
    let text = textInput.value;
    number.innerText = `Characters: ${text.length}`
});

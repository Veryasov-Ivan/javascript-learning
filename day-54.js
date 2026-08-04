// Day 54
// Application Status Checker

let check = document.getElementById("check");
let paragraph4 = document.getElementById("wait");

check.addEventListener("click", function() {
    if (chosenSkills.length <= 2) {
        paragraph4.innerText = "Rejected: Not enough skills.";
    } else if (chosenSkills.length === 3) {
        paragraph4.innerText = "Interview Required.";
    } else {
        paragraph4.innerText = "Accepted.";
    }
});

reset.addEventListener("click", function() {
    paragraph4.innerText = "Waiting...";
});

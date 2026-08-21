// Day 71
// Random Advice Generator

let status = document.getElementById("status");

let adviceParagraph = document.getElementById("adviceParagraph");
let adviceButton = document.getElementById("adviceButton");
let adviceId = document.getElementById("adviceId");

let history = document.getElementById("history");
let adviceHistory = [];

async function getAdvice() {
    status.innerText = "Status: Loading...";

    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();

    if (adviceHistory.includes(data.slip.id)) {

    } else {
        adviceHistory.push(data.slip.id);

        let historyParagraph = document.createElement("p");
        historyParagraph.innerText = `Advice: ${data.slip.advice} | ID: ${data.slip.id}`;

        history.appendChild(historyParagraph);
    }

    adviceParagraph.innerText = `${data.slip.advice}`;
    adviceId.innerText = `Advice ID: ${data.slip.id}`;

    status.innerText = "Status: Complete!";
}

adviceButton.addEventListener("click", function() {
    getAdvice();
});

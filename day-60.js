// Day 60
// Async Task Queue

let form = document.getElementById("form");
let input = document.getElementById("input");
let status = document.getElementById("status");
let result = document.getElementById("result");

async function processTask() {
    let userTask = input.value;
    status.innerText = "Task received...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    status.innerText = "Preparing task...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    status.innerText = "Processing task...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    status.innerText = "Task completed!";
    result.innerText = `Result: ${userTask} completed successfully.`;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    processTask();
});

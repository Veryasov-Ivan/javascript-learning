// Day 59
// Processing Simulation

let startButton = document.getElementById("button");
let statusP = document.getElementById("statusP");
let resultP = document.getElementById("resultP");

async function startProcessing() {
    statusP.innerText = "Status: Processing...";
    startButton.disabled = true;

    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    statusP.innerText = "Status: Processing step 1...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    statusP.innerText = "Status: Processing step 2...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    statusP.innerText = "Status: Finished!";
    resultP.innerText = "Result: Data processed successfully.";
    startButton.disabled = false;
}

startButton.addEventListener("click", function() {
    startProcessing();
});

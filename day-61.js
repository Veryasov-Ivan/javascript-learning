// Day 61
// Fake Download

let button = document.getElementById("button");
let status = document.getElementById("status");
let progress = document.getElementById("progress");

async function startDownloading() {
    button.disabled = true;
    status.innerText = "Status: Downloading...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    progress.innerText = "Progress: 25%";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    progress.innerText = "Progress: 50%";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    progress.innerText = "Progress: 75%";

    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });

    progress.innerText = "Progress: 100%";
    status.innerText = "Status: Download complete!";
    button.disabled = false;
}

button.addEventListener("click", function() {
    startDownloading();
});

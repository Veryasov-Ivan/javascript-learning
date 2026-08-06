// Day 56
// Async/Await Practice

let start = document.getElementById("button");
let result = document.getElementById("text");

async function startDemo() {
    result.innerText = "Status: Loading...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    result.innerText = "Status: Finished!";
}

start.addEventListener("click", function() {
    startDemo();
});

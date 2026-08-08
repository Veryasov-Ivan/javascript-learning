// Day 58
// Fake Data Loader

let nameInput = document.getElementById("name");
let status = document.getElementById("status");
let result = document.getElementById("result");

async function nameUpdate() {
    let username = nameInput.value;
    status.innerText = "Status: Loading...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    status.innerText = "Status: Finished!";
    result.innerText = `Hello, ${username}!`;

}

nameInput.addEventListener("change", function() {
    nameUpdate();
});

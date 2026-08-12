// Day 62
// Fetch API Get Real Data

let button = document.getElementById("button");
let status = document.getElementById("status");
let result = document.getElementById("result");

async function loadUser() {
    status.innerText = "Status: Loading...";

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();

    result.innerText = `User: ${data.name}; Email: ${data.email}; Phone: ${data.phone}`;
    status.innerText = "Status: User loaded!";
}

button.addEventListener("click", function() {
    loadUser();
});

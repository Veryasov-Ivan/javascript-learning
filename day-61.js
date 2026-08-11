// Day 61
// Async Data Processing

let button = document.getElementById("button");
let status = document.getElementById("status");
let result = document.getElementById("result");

async function getUserData() {
    await new Promise(function(resolve) {
        setTimeout(resolve, 2000);
    });

    return {
        name: "Ivan",
        age: 16,
        role: "Developer"
    };

}

async function loadData() {
    status.innerText = "Status: Loading...";
    let data = await getUserData();
    status.innerText = "Status: Complete!"
    result.innerText = `Result: Name: ${data.name}; Age: ${data.age}; Role: ${data.role}.`;
}

button.addEventListener("click", function() {
    loadData();
});

// Day 64
// Random User Finder

let userInput = document.getElementById("userInput");
let status = document.getElementById("status");
let name = document.getElementById("name");
let email = document.getElementById("email");
let country = document.getElementById("country");
let userImage = document.getElementById("userImage");

async function loadUser() {
    status.innerText = "Status: Loading...";

    let url = "https://randomuser.me/api/";
    let response = await fetch(url);
    let data = await response.json();

    name.innerText = `Name: ${data.results[0].name.first} ${data.results[0].name.last}`;
    email.innerText = `Email: ${data.results[0].email}`;
    country.innerText = `Country: ${data.results[0].location.country}`;
    userImage.src = `${data.results[0].picture.large}`;

    status.innerText = "Status: User loaded!";
}

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        loadUser();
    }
});

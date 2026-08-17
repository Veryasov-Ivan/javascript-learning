// Day 67
// GitHub Profile Explorer

let usernameInput = document.getElementById("usernameInput");
let helpP = document.getElementById("hint");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let profileBlock = document.getElementById("profileBlock");
let avatar = document.getElementById("avatar");
let username = document.getElementById("username");
let name = document.getElementById("name");
let followers = document.getElementById("followers");
let repositoriesCount = document.getElementById("repositoriesCount");
let repositoriesBlock = document.getElementById("repositoriesBlock");
let repositories = document.getElementById("repositories");

usernameInput.addEventListener("focus", function() {
    helpP.innerText = "Enter a public GitHub username.";
});

usernameInput.addEventListener("blur", function() {
    helpP.innerText = "";
});

async function getUserData() {
    status.innerText = "Status: Loading...";

    let usernameValue = usernameInput.value;

    // Create and request the first API

    let url1 = `https://api.github.com/users/${usernameValue}`;

    let response1 = await fetch(url1);
    let data1 = await response1.json();

    username.innerText = `Username: ${data1.login}`;
    name.innerText = `Name: ${data1.name}`;
    followers.innerText = `Followers: ${data1.followers}`;
    repositoriesCount.innerText = `Public repositories: ${data1.public_repos}`;

    avatar.src = data1.avatar_url;

    // Create and request the second API

    let url2 = `https://api.github.com/users/${data1.login}/repos`;

    let response2 = await fetch(url2);
    let data2 = await response2.json();

    for (let repository of data2) {
        let repoPar = document.createElement("p");

        if (repository.language === null) {
            repoPar.innerText = `Name: ${repository.name}, Language: Not specified`;
        } else {
            repoPar.innerText = `Name: ${repository.name}, Language: ${repository.language}`;
        }

        repositories.appendChild(repoPar);
    }

    status.innerText = "Status: User loaded!";
}

searchButton.addEventListener("click", function() {
    getUserData();
});

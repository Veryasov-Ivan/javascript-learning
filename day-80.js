// Day 80 
// CRM User Table from API

let loadButton = document.getElementById("load-btn");
let userCount = document.getElementById("user-count");
let tableBody = document.getElementById("users-tbody");

const updateIndexes = () => {
    let rows = tableBody.children;

    for (let i = 0; i < rows.length; i++) {
        rows[i].children[0].innerText = i + 1;
    }
}

const renderTable = (users) => {
    tableBody.innerHTML = "";

    for (let user of users) {
        let tr = document.createElement("tr");

        let userId = document.createElement("td");
        let userName = document.createElement("td");
        let userEmail = document.createElement("td");
        let userCity = document.createElement("td");

        userId.innerText = user.id;
        userName.innerText = user.name;
        userEmail.innerText = user.email;
        userCity.innerText = user.address.city;

        // Create a button row and immediately append the button along with its click listener
        let deleteTd = document.createElement("td");

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "❌";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", () => {
            tr.remove();

            updateIndexes();

            userCount.innerText = `Users total: ${tableBody.children.length}`;
        });

        tr.appendChild(userId);
        tr.appendChild(userName);
        tr.appendChild(userEmail);
        tr.appendChild(userCity);

        deleteTd.appendChild(deleteButton);

        tr.appendChild(deleteTd);

        tableBody.appendChild(tr);
    }

    userCount.innerText = `Users total: ${users.length}`;
}

const fetchUsers = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        renderTable(data);
    } catch (error) {
        console.log("Request error:", error);
    }
}

loadButton.addEventListener("click", () => {
    fetchUsers();
});

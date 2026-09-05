// Day 83
// HR Admin Console Employee Management & Audit Log

const mainTable = document.getElementById("staff-table");
const tableBody = document.getElementById("table-body");
const eventHistory = document.getElementById("event-history");
const actionItems = document.getElementById("action-items");

const logAction = (text) => {
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.innerText = `[${time}] ${text}`;
    eventHistory.appendChild(li);
};

const renderTable = (employees) => {
    tableBody.innerHTML = "";

    for (const user of employees) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.innerText = user.id;
        tr.appendChild(tdId);

        const tdUsername = document.createElement("td");
        tdUsername.innerText = `${user.firstName} ${user.lastName}`;
        tr.appendChild(tdUsername);

        const tdUserCompanyTitle = document.createElement("td");
        tdUserCompanyTitle.innerText = user.company?.title || "Employee";
        tr.appendChild(tdUserCompanyTitle);

        const tdUserStatus = document.createElement("td");
        tdUserStatus.innerText = "🟢 Active";
        tr.appendChild(tdUserStatus);

        const tdActions = document.createElement("td");

        const vacationButton = document.createElement("button");
        vacationButton.innerText = "🏖 Vacation";

        vacationButton.addEventListener("click", () => {
            if (tdUserStatus.innerText === "🟢 Active") {
                tdUserStatus.innerText = "🟡 On Leave";
                vacationButton.innerText = "🔙 Return";
                logAction(`${user.firstName} ${user.lastName} is sent on vacation`);
            } else {
                tdUserStatus.innerText = "🟢 Active";
                vacationButton.innerText = "🏖 Vacation";
                logAction(`${user.firstName} ${user.lastName} returned from vacation`);
            }
        });

        const taskButton = document.createElement("button");
        taskButton.innerText = "📋 Task";

        taskButton.addEventListener("click", () => {
            const taskLi = document.createElement("li");
            taskLi.innerText = `Prepare report for ${user.firstName} — `;

            const completeButton = document.createElement("button");
            completeButton.innerText = "Complete ✔";

            completeButton.addEventListener("click", () => {
                taskLi.remove();
                logAction(`Task for ${user.firstName} completed`);
            });

            taskLi.appendChild(completeButton);
            actionItems.appendChild(taskLi);

            logAction(`New task assigned to ${user.firstName}`);
        });

        tdActions.appendChild(vacationButton);
        tdActions.appendChild(taskButton);
        tr.appendChild(tdActions);

        tableBody.appendChild(tr);
    }
};

const loadEmployees = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users?limit=7");
        const data = await response.json();
        renderTable(data.users);
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

loadEmployees();

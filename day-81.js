// Day 81
// Sprint Tracker

const taskNameInput = document.getElementById("task-name");
const prioritySelector = document.getElementById("priority-select");
const createButton = document.getElementById("create-btn");
const infoTable = document.getElementById("info-table");

const highPriorityTasks = document.getElementById("high-priority-tasks");
const normalPriorityTasks = document.getElementById("normal-priority-tasks");

const updateStats = () => {
    infoTable.rows[1].cells[1].innerText = highPriorityTasks.children.length;
    infoTable.rows[2].cells[1].innerText = normalPriorityTasks.children.length;
};

const createTask = () => {
    const taskName = taskNameInput.value;

    const li = document.createElement("li");

    li.innerText = taskName;

    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Complete / Delete";

    deleteButton.addEventListener("click", () => {
        li.remove();

        updateStats();
    });

    li.appendChild(deleteButton);

    const selectedPriority = prioritySelector.value;

    if (selectedPriority === "High priority") {
        highPriorityTasks.appendChild(li);

        updateStats();
    } else {
        normalPriorityTasks.appendChild(li);

        updateStats();
    }
};

createButton.addEventListener("click", () => {
    createTask();
});

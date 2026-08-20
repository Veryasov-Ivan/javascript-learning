// Day 70
// Recipe Explorer

let mealInput = document.getElementById("mealInput");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let results = document.getElementById("results");

let mealName = document.getElementById("mealName");
let category = document.getElementById("category");
let area = document.getElementById("area");
let instructions = document.getElementById("instructions");

async function findOptions() {

    // Clear old buttons and old meal information before a new search
    results.innerHTML = "";

    mealName.innerText = "Meal: ---";
    category.innerText = "Category: ---";
    area.innerText = "Area: ---";
    instructions.innerText = "Instructions: ---";

    mealInput.disabled = true;

    status.innerText = "Status: Loading...";

    let userMeal = mealInput.value;

    // Check if the search query is empty
    if (userMeal.length === 0) {
        status.innerText = "Status: Please enter a meal name.";

        mealInput.disabled = false;
    } else {
        try {
            let urlOptions = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userMeal}`;

            let responseOptions = await fetch(urlOptions);

            if (responseOptions.ok === false) {
                throw new Error("Server problem");
            }

            let dataOptions = await responseOptions.json();

            // Check if we received any data or an empty response
            if (!dataOptions.meals || dataOptions.meals.length === 0) {
                status.innerText = "Status: No meals found.";
                mealInput.disabled = false;
                return;
            } else {
                // Loop through all found meals, create a button for each one, and add a click listener to every button
                for (let meal of dataOptions.meals) {
                    let mealButton = document.createElement("button");

                    mealButton.innerText = `${meal.strMeal}`;

                    results.appendChild(mealButton);

                    mealButton.addEventListener("click", function() {
                        searchMealInfo(meal.idMeal);
                    });
                }

                status.innerText = "Status: Complete!";

                mealInput.disabled = false;
            }
        } catch (error) {
            status.innerText = "Status: Error loading data.";
            mealInput.disabled = false;
            console.error(error);
        }
    }
}

searchButton.addEventListener("click", function() {
    findOptions();
});

mealInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        findOptions();
    }
});

// Function that receives the ID of the selected meal
async function searchMealInfo(mealId) {
    status.innerText = "Just a second...";

    try {
        // Build the URL with this ID
        let urlWithId = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        // Get the data
        let responseId = await fetch(urlWithId);

        if (responseId.ok === false) {
            throw new Error("Server problem");
        }

        let dataId = await responseId.json();

        // Check if we received any data or an empty response
        if (!dataId.meals || dataId.meals.length === 0) {
            status.innerText = "Status: Failed to retrieve data.";
            return;
        } else {
            mealName.innerText = `Meal: ${dataId.meals[0].strMeal}`;
            category.innerText = `Category: ${dataId.meals[0].strCategory}`;
            area.innerText = `Area: ${dataId.meals[0].strArea}`;

            instructions.innerText = `Instructions: ${dataId.meals[0].strInstructions}`;

            status.innerText = "Status: Complete!";
        }
    } catch (error) {
        status.innerText = "Status: Error loading data.";
        console.error(error);
    }
}

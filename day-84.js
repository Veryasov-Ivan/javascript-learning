// Day 84
// FoodHub — Catalog of dishes and recipes

const filterInput = document.getElementById("filter-input");
const quickButton = document.getElementById("quick-button");
const topRating = document.getElementById("top-rating");
const resetButton = document.getElementById("reset-button");

const cardsContainer = document.getElementById("cards-container");

let allRecipes = [];

const loadData = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=9");

    const data = await response.json();

    allRecipes = data.recipes;

    renderCards(allRecipes)
};

const renderCards = (list) => {
    cardsContainer.innerHTML = list.map(recipe => `
        <div class="card">
            <h3>${recipe.name}</h3>
            <p>Cuisine: ${recipe.cuisine}</p>
            <p>🍳 Cooking time: ${recipe.prepTimeMinutes}</p>
            <p>⭐️ Rating: ${recipe.rating}</p>
        </div>`).join("");
};

// Filtered search logic
filterInput.addEventListener("input", () => {
    const query = filterInput.value.toLowerCase();

    const filtered = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(query));

    renderCards(filtered);
});

// Quick meal filter logic
quickButton.addEventListener("click", () => {
    const filtered = allRecipes.filter(recipe => recipe.prepTimeMinutes <= 15);

    renderCards(filtered);
});

// Logic for the highest-rated dishes filter
topRating.addEventListener("click", () => {
    const sorted = [...allRecipes].sort((high, low) => low.rating - high.rating);

    renderCards(sorted);
});

// Reset filters logic
resetButton.addEventListener("click", () => {
    filterInput.value = "";
    renderCards(allRecipes);
});

loadData();

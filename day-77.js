// Day 77
// Inventory Item Forge

let titleInput = document.getElementById("item-input");
let itemRarity = document.getElementById("item-rarity");
let createButton = document.getElementById("create-btn");
let previewText = document.getElementById("preview-text");
let inventory = document.getElementById("inventory");

const getRarityStyle = (rarity) => {
    if (rarity === "standart") {
        return "⚪";
    } else if (rarity === "rare") {
        return "🔵";
    } else {
        return "🟠";
    }
};

const createCard = (name, type, rarity) => {
    let itemCard = document.createElement("p");

    itemCard.innerText = `${type} ${name} ${rarity}`;

    itemCard.addEventListener("mouseenter", () => {
        previewText.innerText = `You are inspecting: ${name} | Type: ${type} | Rarity: ${rarity}`;
    });

    itemCard.addEventListener("mouseleave", () => {
        previewText.innerText = "Hover over an item in the inventory";
    });

    return itemCard;
};

createButton.addEventListener("click", () => {
    if (titleInput.value.trim().length === 0) {
        previewText.innerText = "Enter an item name";
    } else {
        let finalCard = createCard(titleInput.value, getRarityStyle(itemRarity.value), itemRarity.value);

        inventory.appendChild(finalCard);

        titleInput.value = "";
    }
});

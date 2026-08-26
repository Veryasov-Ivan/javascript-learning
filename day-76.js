// Day 76
// Player badge generator

let nameInput = document.getElementById("name-input");
let createButton = document.getElementById("create-btn");
let badgeContainer = document.getElementById("badge-container");

let formatTag = (name) => {
    let finalName = name.toUpperCase();

    return `🔥 [PRO] ${finalName} 🔥`;
}

createButton.addEventListener("click", () => {
    let userName = nameInput.value.trim();

    if (userName.length === 0) {
        return;
    } else {
        let finalTag = formatTag(userName);

        let tagParagraph = document.createElement("p");

        tagParagraph.innerText = `${finalTag}`;

        badgeContainer.appendChild(tagParagraph);

        nameInput.value = "";
    }
});

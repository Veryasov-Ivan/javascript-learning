// Day 72
// Rick & Morty Character List

let status = document.getElementById("status");
let loadButton = document.getElementById("loadButton");
let charactersBlock = document.getElementById("characters-block");

async function loadCharacters() {
    loadButton.disabled = true;
    status.innerText = "Status: Loading...";

    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");

        if (response.ok === false) {
            throw new Error("Server problem");
        }

        let data = await response.json();

        for (let character of data.results) {
            // Create a block for the character information and its elements
            let characterBlock = document.createElement("div");

            let characterTitle = document.createElement("h2");
            let characterStatus = document.createElement("p");
            let characterSpecies = document.createElement("p");
            let characterImage = document.createElement("img");

            // Add character data to the elements
            characterTitle.innerText = `${character.name}`;
            characterStatus.innerText = `Status: ${character.status}`;
            characterSpecies.innerText = `Species: ${character.species}`;

            characterImage.src = character.image;

            // Add the character elements to the character block
            characterBlock.appendChild(characterTitle);
            characterBlock.appendChild(characterStatus);
            characterBlock.appendChild(characterSpecies);
            characterBlock.appendChild(characterImage);

            charactersBlock.appendChild(characterBlock);
        }

        loadButton.disabled = false;
        status.innerText = "Status: Characters loaded!";

    } catch (error) {
        status.innerText = "Status: Error loading data.";
        console.error(error);
        loadButton.disabled = false;
    }
}

loadButton.addEventListener("click", function() {
    loadCharacters();
});

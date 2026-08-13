// Day 63
// Pokémon Finder

let pokemonInput = document.getElementById("pokemonInput");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let name = document.getElementById("name");
let type = document.getElementById("type");
let height = document.getElementById("height");
let pokemonImage = document.getElementById("pokemonImage");

async function searchPokemon() {
    let pokemonName = pokemonInput.value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    if (pokemonName.length === 0) {
        status.innerText = "Status: Please enter a Pokémon name.";
    } else {
        status.innerText = "Status: Loading...";

        try {
            let response = await fetch(url);

            if (response.ok) {
                let data = await response.json();

                name.innerText = `Name: ${data.name}`;
                type.innerText = `Type: ${data.types[0].type.name}`;
                height.innerText = `Height: ${data.height}`;
                pokemonImage.src = data.sprites.front_default;
                status.innerText = "Status: Complete!";
            } else {
                status.innerText = "Status: Pokémon not found.";
            }

        } catch (error) {
            status.innerText = "Status: Failed to load data.";
        }
    }
}

searchButton.addEventListener("click", function() {
    searchPokemon();
});

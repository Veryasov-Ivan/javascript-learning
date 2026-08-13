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

    status.innerText = "Status: Loading...";

    let response = await fetch(url);
    let data = await response.json();

    name.innerText = `Name: ${data.name}`;
    type.innerText = `Type: ${data.types[0].type.name}`;
    height.innerText = `Height: ${data.height}`;
    pokemonImage.src = `${data.sprites.front_default}`;
    status.innerText = "Status: Complete!";
}

searchButton.addEventListener("click", function() {
    searchPokemon();
});

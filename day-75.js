// Day 75
// Anime Explorer

let searchInput = document.getElementById("searchInput");
let loadButton = document.getElementById("loadButton");
let status = document.getElementById("status");
let animeContainer = document.getElementById("animeContainer");
let favoritesContainer = document.getElementById("favoritesContainer");

let animeCards = [];

let favorites = [];

async function loadAnime() {
    status.innerText = "Status: Just a second...";

    animeContainer.innerHTML = "";

    searchInput.disabled = true;
    loadButton.disabled = true;

    try {
        let animeResponse = await fetch("https://api.jikan.moe/v4/anime?q=naruto&limit=10");

        // If the server responds with an error (504, 404, 500), immediately throw it into catch
        if (!animeResponse.ok) {
            throw new Error(`Server status: ${animeResponse.status}`);
        }

        let animeData = await animeResponse.json();

        for (let anime of animeData.data) {

            // First, create a separate block and inner elements for each item
            let animeBlock = document.createElement("div");

            let animeAvatar = document.createElement("img");

            let animeTitle = document.createElement("h2");
            let animeType = document.createElement("p");
            let animeScore = document.createElement("p");

            let addFavorite = document.createElement("button");
            let favoriteBlock;

            // Store all the data
            animeAvatar.src = anime.images.jpg.image_url;

            animeTitle.innerText = `${anime.title}`;
            animeType.innerText = `${anime.type}`;
            animeScore.innerText = `${anime.score}`;

            addFavorite.innerText = "☆";

            // Then add the inner elements to the anime block, and the block itself to the main results container
            animeBlock.appendChild(animeAvatar);

            animeBlock.appendChild(animeTitle);
            animeBlock.appendChild(animeType);
            animeBlock.appendChild(animeScore);

            animeBlock.appendChild(addFavorite);

            animeContainer.appendChild(animeBlock);

            animeCards.push({
                anime: anime,
                block: animeBlock
            });

            // Logic for adding anime to favorites
            addFavorite.addEventListener("click", function() {

                if (favorites.includes(anime.mal_id)) {
                    let index = favorites.indexOf(anime.mal_id);

                    favorites.splice(index, 1);

                    favoriteBlock.remove();

                    addFavorite.innerText = "☆";

                } else {
                    favorites.push(anime.mal_id);

                    favoriteBlock = document.createElement("div");

                    let favoriteImage = document.createElement("img");

                    let favoriteTitle = document.createElement("h2");
                    let favoriteType = document.createElement("p");
                    let favoriteScore = document.createElement("p");

                    favoriteImage.src = anime.images.jpg.image_url;

                    favoriteTitle.innerText = `${anime.title}`;
                    favoriteType.innerText = `${anime.type}`;
                    favoriteScore.innerText = `${anime.score}`;

                    favoriteBlock.appendChild(favoriteImage);

                    favoriteBlock.appendChild(favoriteTitle);
                    favoriteBlock.appendChild(favoriteType);
                    favoriteBlock.appendChild(favoriteScore);

                    favoritesContainer.appendChild(favoriteBlock);

                    addFavorite.innerText = "★";
                }
            });
        }

        searchInput.disabled = false;
        loadButton.disabled = false;

        status.innerText = "Status: Complete!";
    } catch (error) {
        searchInput.disabled = false;
        loadButton.disabled = false;
        status.innerText = "Status: Error loading data.";
        console.error(error);
    }
}

// Simple live search through already created cards
searchInput.addEventListener("input", function() {
    let query = searchInput.value.toLowerCase().trim();

    for (let item of animeCards) {
        let title = item.anime.title.toLowerCase();
        
        if (title.includes(query)) {
            item.block.style.display = ""; // Show the card
        } else {
            item.block.style.display = "none"; // Hide the card
        }
    }
});

loadButton.addEventListener("click", function() {
    loadAnime();
});

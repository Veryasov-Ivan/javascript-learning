// Day 66
// TV Show Finder

let showInput = document.getElementById("showInput");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let showName = document.getElementById("showName");
let premiered = document.getElementById("premiered");
let genres = document.getElementById("genres");
let seasons = document.getElementById("seasons");

async function findShow() {
    status.innerText = "Status: Loading...";

    // Request to the first API

    let showQuery = showInput.value;

    let idUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showQuery)}`;

    let idResponse = await fetch(idUrl);
    let idData = await idResponse.json();

    let showId = idData[0].show.id;

    // Request to the second API

    let mainUrl = `https://api.tvmaze.com/shows/${showId}/seasons`;

    let mainResponse = await fetch(mainUrl);
    let mainData = await mainResponse.json();

    let showNameVisible = idData[0].show.name;
    let premieredVisible = idData[0].show.premiered;
    let genresVisible = idData[0].show.genres;

    let seasonsVisible = mainData.length;

    showName.innerText = `Show: ${showNameVisible}`;
    premiered.innerText = `Premiered: ${premieredVisible}`;
    genres.innerText = `Genres: ${genresVisible}`;
    seasons.innerText = `Seasons: ${seasonsVisible}`;

    status.innerText = "Status: Complete!";
}

searchButton.addEventListener("click", function() {
    findShow();
});

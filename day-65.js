// Day 65
// Weather Finder

let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let wind = document.getElementById("wind");

async function getWeatherData() {
    status.innerText = "Status: Loading...";

    // Request to the first API

    let userCity = cityInput.value;

    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${userCity}`;

    let responseCoord = await fetch(url);
    let dataCoord = await responseCoord.json();

    let latitude = dataCoord.results[0].latitude;
    let longitude = dataCoord.results[0].longitude;

    // Request to the second API

    let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    let responseWeath = await fetch(weatherUrl);
    let dataWeath = await responseWeath.json();

    city.innerText = `City: ${userCity}`;
    temperature.innerText = `Temperature: ${dataWeath.current.temperature_2m}`;
    wind.innerText = `Wind speed: ${dataWeath.current.wind_speed_10m}`;

    status.innerText = "Status: Complete!";
}

searchButton.addEventListener("click", function() {
    getWeatherData();
});

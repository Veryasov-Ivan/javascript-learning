// Day 74
// Crypto Logo Gallery

let loadButton = document.getElementById("loadButton");
let status = document.getElementById("status");
let gallery = document.getElementById("gallery");

async function loadCoins() {
    gallery.innerHTML = "";

    loadButton.disabled = true;

    status.innerText = "Status: Just a second...";

    try {
        let coinsResponse = await fetch("https://api.coinpaprika.com/v1/coins");

        if (coinsResponse.ok === false) {
            throw new Error("Server problem");
        }

        let coinsData = await coinsResponse.json();

        for (let coin of coinsData) {
            if (coin.rank > 6) {
                break;
            }

            let coinBlock = document.createElement("div");

            let coinTitle = document.createElement("h2");
            let coinSymbol = document.createElement("p");
            let coinRank = document.createElement("p");

            coinTitle.innerText = `${coin.name}`;
            coinSymbol.innerText = `${coin.symbol}`;
            coinRank.innerText = `${coin.rank}`;

            coinBlock.appendChild(coinTitle);
            coinBlock.appendChild(coinSymbol);
            coinBlock.appendChild(coinRank);

            gallery.appendChild(coinBlock);

            loadCoinLogo(coin, coinBlock);
        }

        loadButton.disabled = false;

        status.innerText = "Status: Complete!";
    } catch (error) {
        loadButton.disabled = false;
        status.innerText = "Status: Error loading data.";
        console.error(error);
    }
}

async function loadCoinLogo(coin, coinBlock) {
    try {
        let urlLogo = `https://api.coinpaprika.com/v1/coins/${coin.id}`;

        let logoResponse = await fetch(urlLogo);

        let logoData = await logoResponse.json();

        let coinLogo = document.createElement("img");
        coinLogo.src = logoData.logo;

        coinBlock.appendChild(coinLogo);
    } catch (error) {
        loadButton.disabled = false;
        status.innerText = "Status: Error loading logo.";
        console.error(error);
    }
}

loadButton.addEventListener("click", function() {
    loadCoins();
});

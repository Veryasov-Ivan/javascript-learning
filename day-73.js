// Day 73
// Crypto Market Dashboard

let refreshButton = document.getElementById("refreshButton");
let status = document.getElementById("status");
let market = document.getElementById("market");

async function loadMarket() {
    status.innerText = "Status: Loading...";

    refreshButton.disabled = true;

    market.innerHTML = "";

    try {
        let response = await fetch("https://api.coinpaprika.com/v1/tickers");

        if (response.ok === false) {
            throw new Error("Server problem");
        }

        let data = await response.json();

        if (data.length === 0) {
            status.innerText = "Status: Failed to retrieve data.";
            return;
        }

        for (let coin of data) {
            if (coin.rank > 10) {
                break;
            }

            let coinParagraph = document.createElement("p");

            let coinChange = "";

            if (coin.quotes.USD.percent_change_24h > 0) {
                coinChange = "+";
            }

            coinParagraph.innerText = `${coin.rank}. ${coin.name} (${coin.symbol}) - $${coin.quotes.USD.price.toFixed(2)}. Last change: ${coinChange}${coin.quotes.USD.percent_change_24h.toFixed(2)}%`;

            market.appendChild(coinParagraph);
        }

        refreshButton.disabled = false;

        status.innerText = "Status: Refresh complete!";
    } catch (error) {
        refreshButton.disabled = false;
        status.innerText = "Status: Error loading data.";
        console.error(error);
    }
}

refreshButton.addEventListener("click", function() {
    loadMarket();
});

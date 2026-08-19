// Day 69
// TV Show Search

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let status = document.getElementById("status");
let results = document.getElementById("results");

async function searchShows() {
    status.innerText = "Status: Loading...";

    let query = searchInput.value;

    if (query.length === 0) {
        status.innerText = "Status: Please enter a show name.";
    } else {
        try {
            searchInput.disabled = true;

            let url = `https://api.tvmaze.com/search/shows?q=${query}`;

            let response = await fetch(url);

            if (response.ok === false) {
                throw new Error("Server problem");
            }

            let data = await response.json();

            // Clearing old results
            results.innerText = "";

            if (data.length === 0) {
                status.innerText = "Status: No shows found.";
                searchInput.disabled = false;
                return;
            } else {
                for (let result of data) {
                    // Creating a new paragraph for each movie found
                    let showParagraph = document.createElement("p");

                    // Adding the found films to the paragraph
                    showParagraph.innerText = result.show.name;

                    // Adding the list of results in HTML
                    results.appendChild(showParagraph);
                }

                status.innerText = "Status: Complete!";

                searchInput.disabled = false;
            }
        } catch (error) {
            status.innerText = "Status: Error loading data.";
            searchInput.disabled = false;
            console.error(error);
        }
    }
}

searchButton.addEventListener("click", function() {
    searchShows();
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchShows();
    }
});

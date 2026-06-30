// Day 19

const steamLibrary = {
    owner: "Gamer777",
    favoriteGame: "cyberpunk 2077",

    searchGame: function(searchQuery) {
        let game = searchQuery.toLowerCase()
        if (game === this.favoriteGame) {
            return `Game ${this.favoriteGame} was found in ${this.owner}'s library! Launching...`
        } else {
            return `Game not found!`
        }
    }
};

let userSearch = "CYBERPUNK 2077";

console.log(steamLibrary.searchGame(userSearch));

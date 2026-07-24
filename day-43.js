// Day 43
// Music Playlist

let playlist = [
    { title: "Sky", tags: ["chill", "ambient"] },
    { title: "Storm", tags: ["rock", "epic"] },
    { title: "Dream", tags: ["ambient", "sleep"] },
    { title: "Fire", tags: ["rock", "gym"] },
    { title: "Ocean", tags: ["chill", "sleep"] }
];

let favoriteTags = ["rock", "chill"];

let selectedTracks = [];

function buildPlaylist() {
    for (const track of playlist) {
        let matched = false;

        for (const tag of favoriteTags) {
            if (track.tags.includes(tag)) {
                matched = true;
            }
        }

        if (matched === true) {
            selectedTracks.push(track.title);
        }
    }
};

buildPlaylist();

setTimeout(function () {
    console.log(`Playlist: ${selectedTracks}.`);
}, 2000);

setTimeout(function () {
    if (selectedTracks.length >= 4) {
        console.log("Playlist is ready!");
    } else {
        console.log("Not enough tracks.");
    }
}, 5000);

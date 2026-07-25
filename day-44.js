// Day 44
// Player Achievement Verification

let players = [
    { nickname: "Alpha", achievements: ["Builder", "Explorer"] },
    { nickname: "Bravo", achievements: ["Farmer"] },
    { nickname: "Charlie", achievements: ["Warrior", "Hunter"] },
    { nickname: "Delta", achievements: ["Explorer", "Miner"] },
    { nickname: "Echo", achievements: [] }
];

let requiredAchievements = ["Hunter", "Explorer"];
let approvedPlayers = [];

function checkAchievements() {
    for (const player of players) {
        let matched = false;

        for (const achievement of requiredAchievements) {
            if (player.achievements.includes(achievement)) {
                matched = true;
            }
        }

        if (matched === true) {
            approvedPlayers.push(player.nickname);
        }
    }
};

checkAchievements();

setTimeout(function () {
    console.log(`Approved players: ${approvedPlayers}.`);
}, 2000);

setTimeout(function () {
    if (approvedPlayers.length >= 3) {
        console.log(`Enough qualified players: ${approvedPlayers.length}.`);
    } else {
        console.log(`Not enough qualified players: ${approvedPlayers.length}.`);
    }
}, 5000);

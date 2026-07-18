// Day 37
// Game Server Monitoring System

let bannedSoft = ["AimBot", "WallHack", "SpeedHack"];

let activePlayers = [
    { nickname: "SniperPro", level: 42, runningApps: ["Discord", "Steam"] },
    { nickname: "Cheater99", level: 5, runningApps: ["Chrome", "WallHack", "Spotify"] },
    { nickname: "NoobMaster", level: 12, runningApps: ["Steam", "Discord"] },
    { nickname: "GodMode_X", level: 88, runningApps: ["AimBot", "Steam", "Telegram"] }
];

let playersToBan = [];

function checkPlayers() {
    for (const i of activePlayers) {
        for (const j of i.runningApps) {
            if (bannedSoft.includes(j)) {
                playersToBan.push(i.nickname);
                break;
            }
        }
    }
}

function generateReport() {
    checkPlayers();

    if (playersToBan.length > 0) {
        console.log(`Warning! The following users have been banned for cheating: ${playersToBan}.`);
    } else {
        console.log("Scan completed. No cheaters were detected on the server.");
    }
}

setTimeout(function() {
    generateReport();
}, 2000);

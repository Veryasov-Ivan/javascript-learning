// Day 33
// Raid Selection

let dungeonQueue = [
    { name: "RoboHunter", level: 12, isReady: true },
    { name: "MegaBoss_99", level: 35, isReady: false },
    { name: "SpeedyGonzales", level: 22, isReady: true },
    { name: "NoobMaster", level: 5, isReady: true },
    { name: "Valkyrie", level: 28, isReady: true }
];

let requiredLevel = 20;

function selectPlayers() {
    let pastPlayers = [];
    for (let i = 0; i < dungeonQueue.length; i++) {
        if (dungeonQueue[i].level >= requiredLevel && dungeonQueue[i].isReady === true) {
            pastPlayers.push(dungeonQueue[i].name)
        }
    }
        return pastPlayers
};

let playersToStart = selectPlayers();

if (playersToStart.length > 0) {
    console.log(`The raid is starting! Participants: ${playersToStart}`)
} else {
    console.log(`Raid canceled. Not enough ready players of the required level.`)
};

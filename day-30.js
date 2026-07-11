// Day 30
// Nickname Validator and Access System

let bannedWords = ["scam", "hack", "admin"];

// Player information
const playersInfo = [
    {playerName: "4ReloxX", isBanned: false, playerLevel: 14},
    {playerName: "Imp2rable", isBanned: false, playerLevel: 67}
];

function validatePlayer(username, banned, level) {
    if (banned === true) {
        return "ACCESS DENIED: ACCOUNT IS BANNED."
    } else if (username.length < 4 || username.length > 12) {
        return "ACCESS DENIED: INVALID USERNAME LENGTH."
    } else if (level < 10 && username !== "tester") {
        return "ACCESS DENIED: LEVEL IS TOO LOW."
    } else {
        return "ACCESS GRANTED."
    }
};

function checkChatFilter(username) {
    for (let i = 0; i < bannedWords.length; i++) {
        if (username.includes("scam") || username.includes("hack") || username.includes("admin")) {
            return true
        }
    }
        return false;
};

if (checkChatFilter(playersInfo[0].playerName) === true) {
    console.log("A forbidden word was detected in the username!")
} else {
    let verdict = validatePlayer(playersInfo[0].playerName, playersInfo[0].isBanned, playersInfo[0].playerLevel)
    console.log(verdict)
}

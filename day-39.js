// Day 39
// Game Chat Moderation

let chatMessages = [
    {nickname: "Imp2rable", message: "i hack", isModerator: false},
    {nickname: "Foma_00", message: "Hello", isModerator: false},
    {nickname: "ArtToTs", message: "hack", isModerator: true},
    {nickname: "HawwcIR", message: "spam", isModerator: false}
];

let bannedWords = ["spam", "hack"];
let blockedUsers = [];

function checkChat() {
    for (let i = 0; i < chatMessages.length; i++) {
        if ((chatMessages[i].message.includes(bannedWords[0]) || chatMessages[i].message.includes(bannedWords[1])) && chatMessages[i].isModerator === false) {
            blockedUsers.push(chatMessages[i].nickname);
            console.log(`User ${chatMessages[i].nickname} has been blocked for using a banned word.`);
        } else if ((chatMessages[i].message.includes(bannedWords[0]) || chatMessages[i].message.includes(bannedWords[1])) && chatMessages[i].isModerator === true) {
            console.log(`Moderator ${chatMessages[i].nickname} is exempt from automatic moderation.`);
        } else {
            console.log(`User ${chatMessages[i].nickname} passed automatic moderation.`);
        }
    }
};

setTimeout(function() {
    checkChat();

    if (blockedUsers.length > 0) {
        console.log(`Blocked users: ${blockedUsers}.`);
    } else {
        console.log("There are no blocked users.");
    }
}, 2000);

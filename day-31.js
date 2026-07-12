// Day 31
// Poison Effect

let playerHP = 120;
let poisonTicks = 3;

const poisonTypes = [
    {type: "acid", critical: false},
    {type: "bio", critical: false},
    {type: "magic", critical: true}
];

function applyPoison(poisonType, isCritical) {
    let finalDamage = 10;
    if (poisonType === "acid" || poisonType === "bio") {
        finalDamage = 20;
    } else if (poisonType === "magic" && isCritical === true) {
        finalDamage = 35;
    }

    for (let i = 0; i < poisonTicks; i++) {
        playerHP -= finalDamage;
        console.log(`The ${poisonType} poison has taken effect! Remaining HP: ${playerHP}.`)
    }
};

applyPoison(poisonTypes[2].type, poisonTypes[2].critical);

if (playerHP > 50) {
    console.log(`The player is in good condition. Remaining health: ${playerHP}.`)
} else if (playerHP > 0) {
    console.log(`The player is in critical condition! Remaining health: ${playerHP}!`)
} else {
    console.log("The player has been killed!")
};

console.log(playerHP);

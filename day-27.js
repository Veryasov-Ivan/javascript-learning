// Day 27

const raidParty = [
    {name: "Tonny", damage: 100, isAlive: true},
    {name: "4MarkuzZ", damage: 70, isAlive: true},
    {name: "55HoPe", damage: 65, isAlive: true},
    {name: "Imp2rable", damage: 150, isAlive: true}
];

let bossHP = 750;
let alivePlayers = [];

function getLivingPlayers(players) {
    for (const player of players) {

        if (player.isAlive === true) {
            alivePlayers.push(player)
        }
    }

    return alivePlayers

};

let total = 0;

function calculateTotalDamage(totalDamage) {
    for (const playerDamage of totalDamage) {

        total = total + playerDamage.damage
    }

    return total

};

function executeRaidRound(roundSimulation) {
        roundSimulation[2].isAlive = false

        let survivors = getLivingPlayers(raidParty)
        let roundDamage = calculateTotalDamage(survivors)

        bossHP = bossHP - roundDamage

        if (bossHP <= 0) {
            console.log(`🔥 THE DRAGON HAS BEEN DEFEATED! ${roundDamage} damage dealt. The party celebrates the victory!`)
        } else {
            console.log(`⚔️ The raid round is over! ${roundDamage} damage dealt. The Dragon has ${bossHP} HP remaining. The players retreat...`)
        }
};

executeRaidRound(raidParty);

setTimeout(function() {
    console.log(raidParty)
}, 10000);

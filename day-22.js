// Day 22

const blacksmith = {
    name: "Thorvald",
    gold: 100
};

const sword = {
    title: "Ice Scorpion",
    damage: 50,
    upgradeCost: 40
};

const forge = {
    upgradeWeapon: function(master, weapon) {
        master.gold = master.gold + weapon.upgradeCost
        console.log(`Blacksmith ${master.name} received $${weapon.upgradeCost} gold and started forging ${weapon.title}... Current gold: $${master.gold}`)

        setTimeout(function() {
            weapon.damage = weapon.damage + 25
            console.log(`The work is complete! ${weapon.title}'s damage has increased to ${weapon.damage}!`)
        }, 4000)
    }
};

forge.upgradeWeapon(blacksmith, sword);

setTimeout(function() {
    console.log(`Preparing for battle! The fight will begin soon...`)
}, 7500);

const monster = {
    monsterName: "Dragon",
    health: 70
};

const monster2 = {
    monsterName: "Ice Golem",
    health: 90
};

const arena = {
    startFight: function(weaponItem, boss) {
        setTimeout(function() {
            if (weaponItem.damage > boss.health) {
                console.log(`Monster ${boss.monsterName} has been defeated! Great job!`)
            } else if (weaponItem.damage === boss.health) {
                console.log(`It's a draw! The battle has ended. Both sides are exhausted.`)
            } else {
                console.log(`${weaponItem.title}'s damage was too low. ${boss.monsterName} wins the battle!`)
            }
        }, 10000);
    }
};

arena.startFight(sword, monster2);

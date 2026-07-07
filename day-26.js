// Day 26

const lootChests = [
    {resource: "Iron", weight: 75},
    {resource: "Diamonds", weight: 34},
    {resource: "Forbidden Potion", weight: 0.5},
    {resource: "Emeralds", weight: 45}
];

const knightGuard = {
    name: "Kai",
    confiscatedWeight: 0,

    checkBorder: function(chestExamination) {
        console.log("The knight customs officer begins inspecting the loot cart...")

        setTimeout( function() {
            let knightName = knightGuard.name.toUpperCase()
            for (const chest of chestExamination) {
                if (chest.resource === "Forbidden Potion" || chest.weight > 50) {
                    knightGuard.confiscatedWeight = knightGuard.confiscatedWeight + chest.weight
                    console.log(`GUARD ${knightName}: Contraband detected: ${chest.resource}! Confiscated.`)
                } else {
                    console.log(`Chest containing ${chest.resource} has been inspected. All clear.`)
                }
            }
        }, 4000);

        setTimeout( function() {
            if (knightGuard.confiscatedWeight === 0) {
                console.log(`GUARD ${knightGuard.name.toUpperCase()}: No violations found. Welcome to the citadel!`)
            } else {
                console.log(`GUARD ${knightGuard.name.toUpperCase()}: Contraband confiscated! Total confiscated weight: ${knightGuard.confiscatedWeight}. You have been fined!`)
            }
        }, 8000);
    }
};

knightGuard.checkBorder(lootChests);

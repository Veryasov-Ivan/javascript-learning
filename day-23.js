// Day 23
// Raid into an abandoned bunker

const person = {
    name: "MIKE",
    hackKey: true
};

const bag = ["Pistol", "Water", "First Aid Kit"];

const bunker = {
    hacking: function(who, backpack) {
        console.log("Terminal locked. Scanning hacker equipment signatures...")

        setTimeout( function() {
            let personName = who.name.toLowerCase()
            let rareTrophy = "Golden Artifact"

            if (who.hackKey === true && backpack[0] === "Pistol") {
                backpack.push(rareTrophy)
                console.log(`Hack successful, ${personName}! The door is open. You collected the trophy! Current backpack: ${backpack}.`)
            } else {
                backpack.pop()
                console.log(`HACK FAILED! Mercenary ${personName} triggered the alarm and lost an item while escaping! Remaining backpack: ${backpack}.`)
            }
        }, 5000);
    }
};

bunker.hacking(person, bag);

// Day 32
// Checking a Chest for Bugs

let localChest = ["Sword", "404", "Shield", "ERROR", "Potion", "404"];

function countBugs() {
    let brokenObjects = ["404", "ERROR"];
    let foundObjects = [];
    for (let i = 0; i < localChest.length; i++) {
        if (localChest[i] === brokenObjects[0] || localChest[i] === brokenObjects[1]) {
            foundObjects.push(localChest[i])
        }
    }
        return foundObjects
};

let bugAmount = countBugs();

if (bugAmount.length === 0) {
    console.log("The chest is clean. No bugs were found.")
} else {
    console.log(`Bugs detected! Corrupted items: ${bugAmount}`)
};

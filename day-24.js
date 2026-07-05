// Day 24

const commonChest = [
    {title: "Rusty Dagger", type: "junk", value: 10},
    {title: "Dragon Sword", type: "weapon", value: 250},
    {title: "Broken Shield", type: "junk", value: 5},
    {title: "Magic Staff", type: "weapon", value: 195}
];

const itemsToSell = [];

let totalGoldEarned = 0;

function processLoot(items) {
    for (const item of items) {
        if (item.type === "junk") {
            console.log(`${item.title} is junk, we throw it away.`)
        } else if (item.type === "weapon" && item.value <= 50) {
            console.log(`${item.title} is too cheap, let's give it to beginners.`)
        } else {
            itemsToSell.push(item)
            totalGoldEarned = totalGoldEarned + item.value
            console.log(`${item.title} selected for sale for ${item.value} gold!`)
        }
    }
};

processLoot(commonChest);

setTimeout( function() {
    console.log(`Total gold earned: ${totalGoldEarned}.`)
    console.log(`Number of items for sale: ${itemsToSell.length}.`)
}, 4000);

// Day 25

const availableWeapons = [
    {title: "Wooden Sword", requiredLevel: 1, isEquipped: false},
    {title: "Spike's Blaster", requiredLevel: 15, isEquipped: false},
    {title: "Laser Rifle", requiredLevel: 30, isEquipped: false},
    {title: "Pistol", requiredLevel: 5, isEquipped: false}
];

let playerLevel = 20;

const inventoryLimit = 2;

const myInventory = [];

function equipWeapons(weapons) {
    for (const weapon of weapons) {
        if (playerLevel < weapon.requiredLevel) {
            console.log(`${weapon.title} is unavailable! Required level: ${weapon.requiredLevel}.`)
        } else if (myInventory.length >= inventoryLimit) {
            console.log(`Inventory is full! Could not pick up ${weapon.title}.`)
        } else {
            myInventory.push(weapon)
            console.log(`${weapon.title} equipped successfully!`)
        }
    }
};

equipWeapons(availableWeapons);

setTimeout( function() {
    console.log(`Total items in inventory: ${myInventory.length}`)
}, 4000);

// Day 46
// Game Store Warehouse

let warehouse = [
    { name: "Health Potion", quantity: 15, banned: false },
    { name: "Magic Scroll", quantity: 0, banned: false },
    { name: "Poison Flask", quantity: 8, banned: true },
    { name: "Iron Sword", quantity: 4, banned: false },
    { name: "Dragon Egg", quantity: 1, banned: true }
];

let availableItems = [];
let removedItems = [];
let totalQuantity = 0;

function checkWarehouse() {
    for (const item of warehouse) {
        if (item.banned === true) {
            removedItems.push(item.name);
            console.log(`Item ${item.name} has been confiscated.`);
        } else if (item.quantity <= 0) {
            console.log(`Item ${item.name} is out of stock.`);
        } else {
            availableItems.push(item.name);
            totalQuantity += item.quantity;
            console.log(`Item ${item.name} is available.`);
        }
    }
};

checkWarehouse();

setTimeout(function() {
    if (totalQuantity >= 20) {
        console.log("Warehouse is fully stocked!");
    } else {
        console.log("Warehouse needs restocking.");
    }
}, 5000);

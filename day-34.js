// Day 34
// Kingdom Tax System

// Peasants - 10 gold
// Merchants - 50 gold

let citizens = [
    { name: "Tomas", job: "Peasant" },
    { name: "John", job: "Merchant" },
    { name: "Arthur", job: "Peasant" },
    { name: "Marcus", job: "Merchant" },
    { name: "Gideon", job: "Peasant" }
];

function calculateTaxes() {
    let totalCollected = 0;
    for (let i = 0; i < citizens.length; i++) {
        if (citizens[i].job === "Merchant") {
            totalCollected += 50
        } else if (citizens[i].job === "Peasant") {
            totalCollected += 10
        }
    }
    return totalCollected
};

let treasuryGold = calculateTaxes();

if (treasuryGold > 150) {
    console.log(`The treasury is full! Collected ${treasuryGold} gold. The king is pleased.`)
} else {
    console.log(`Not enough gold! Only ${treasuryGold} gold has been collected. Additional taxes must be imposed.`)
}

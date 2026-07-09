// Day 28

const mineLayers = [
    [ {name: "Coal", price: 10}, {name: "Iron", price: 25} ],
    [ {name: "Gold", price: 70}, {name: "Emerald", price: 120} ],
    [ {name: "Diamond", price: 250}, {name: "Ruby", price: 300} ]
];

let targetMoney = 500;

function calculateLevelIncome(gemsArray) {
    let levelTotal = 0
    for (let i = 0; i < gemsArray.length; i++) {
        let gem = gemsArray[i]
        levelTotal = levelTotal + gem.price
    }
    return levelTotal
};

function checkShaftEarnings(fullMine) {
    let finalIncome = 0
    for (let i = 0; i < fullMine.length; i++) {
        let currentLayer = fullMine[i]
        let layerPrice = calculateLevelIncome(currentLayer)
        finalIncome = finalIncome + layerPrice
        console.log(`Level #${i} generated: ${layerPrice} coins.`)
    }
        if (finalIncome >= targetMoney) {
            console.log(`🏆 Quest completed! Earned ${finalIncome} out of ${targetMoney} coins!`)
        } else {
            console.log(`🛑 Not enough income. Only ${finalIncome} coins were collected.`)
        }
};

checkShaftEarnings(mineLayers);

// Day 40
// Mini ATM

let wallet = [500, 1000, 200, 5000, 100, 2000];
let laptopPrice = 7000;
let acceptedBills = [];
let totalSum = 0;

function checkWallet(walletX) {
    for (const banknote of walletX) {
        if (banknote >= 500) {
            acceptedBills.push(banknote);
            totalSum += banknote;
        } else {
            console.log(`Banknote ${banknote} has a denomination that is too small.`);
        }
    }
};

checkWallet(wallet);

setTimeout(function() {
    console.log(`Accepted bills: ${acceptedBills.length}.`);
    console.log(`Total money collected: ${totalSum}.`);
}, 2400);

setTimeout(function() {
    if (totalSum >= laptopPrice) {
        console.log(`Purchase is possible!`);
    } else {
        console.log(`Not enough funds.`);
    }
}, 5750);

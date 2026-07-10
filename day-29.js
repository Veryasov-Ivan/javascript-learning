// Day 29
// Daily Rewards in a Simulator

let totalCoins = 0;
let streakDays = 5;

function giveDailyRewards() {
    console.log("🎁 Checking your weekly login streak...");

    for (let i = 1; i <= streakDays; i++) {
        if (i === 5 || i === 7) {
            totalCoins += 500;
            console.log(`Day ${i}: WOW! Mega bonus +500 coins!`);
        } else if (i >= 3) {
            totalCoins += 200;
            console.log(`Day ${i}: Nice login! +200 coins.`);
        } else {
            totalCoins += 50;
            console.log(`Day ${i}: Starter bonus. +50 coins.`);
        }
    }

    console.log(`💰 Rewards collected! Total coins earned: ${totalCoins}`);

};

giveDailyRewards();

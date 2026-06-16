// Day 5

let userBalance = 600;
const premiumPrice = 500;

if (userBalance >= premiumPrice) {
    userBalance = userBalance - premiumPrice;

    console.log("Purchase successful! Your new balance:");
    console.log(userBalance);
} else {
    console.log("Insufficient funds!");
}

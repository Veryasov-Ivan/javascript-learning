// Day 6

const clientStatus = "vip";
let totalPrice = 1000;

if (clientStatus === "vip") {
    totalPrice = totalPrice - 300;
    console.log("You have a VIP discount of 300 rubles!");
} else if (clientStatus === "regular") {
    totalPrice = totalPrice - 100;
    console.log("You have a regular customer discount of 100 rubles!");
} else {
    console.log("No discounts available. Standard price applies.");
}

console.log("Total to pay: " + totalPrice + " rubles.");

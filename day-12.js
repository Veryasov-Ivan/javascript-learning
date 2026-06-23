// Day 12

const budget = 150000;
const isGamer = true;
const preference = "Apple";

const appleLaptops = ["MacBook Air M2", "MacBook Pro M3"];
const asusLaptops = ["Asus Vivobook", "Asus ROG Strix"];
const monitors = ["Standard Full HD", "Gaming 4K 144Hz"];

if (budget >= 150000 && isGamer === true) {
    console.log("Budget approved! Recommended setup: " + asusLaptops[1] + " and " + monitors[1]);
} else if (budget < 150000 && preference === "Apple") {
    console.log("Recommended for work: " + appleLaptops[0] + " and " + monitors[0]);
} else if (budget < 150000 && preference === "Asus") {
    console.log("Recommended for work and light gaming: " + asusLaptops[0]);
} else {
    console.log("You need a bigger budget or different requirements!");
}

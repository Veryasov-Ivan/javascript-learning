// Day 36
// Custom Keyboard Build Price Calculator

let componentsPrice = {
    case: 3500,
    switches: 2200,
    keycaps: 1800
};

let selectedServices = ["Switch Lubrication", "Sound Dampening", "Express Delivery"];

let servicePriceList = [
    { name: "Switch Lubrication", price: 1500 },
    { name: "Sound Dampening", price: 1000 },
    { name: "Express Delivery", price: 2000 }
];

function calculateTotal() {
    let totalSum = componentsPrice.case + componentsPrice.keycaps + componentsPrice.switches;

    for (const i of servicePriceList) {
        if (selectedServices.includes(i.name)) {
            totalSum += i.price;
        }
    }

    if (totalSum >= 9000) {
        totalSum *= 0.9;
    }

    return totalSum;
}

setTimeout(function() {
    let finalResult = calculateTotal();
    console.log(`Final build price: ${finalResult} RUB.`);
}, 1500);

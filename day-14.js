// Day 14

const blogerName = "Kyaaan"
const views = 35000;
const basePrice = 25000;

let finalPrice = 0;

if (views >= 50000) {
    finalPrice = basePrice + 10000
    console.log(`Hello, ${blogerName}! Your reach is amazing. Final price with bonus: ${finalPrice}`)
    } else if (views >= 30000) {
    finalPrice = basePrice
    console.log(`Hello, ${blogerName}! We would like to work under our standard terms: ${finalPrice}`)
    } else {
    finalPrice = "Barter"
    console.log(`${blogerName}, hello! We reviewed your profile and would like to offer a collaboration in the following format: ${finalPrice}`)
}

// Day 15

const order = {
    platform: "Kwork",
    price: 5000,
    isUrgently: true,
    skills: ["JavaScript", "JSON"]
};
const client = {
    name: "Andrew",
    rating: 5
};

let message = "";

if (order.isUrgently === true && client.rating === 5) {
    message = `Attention! A ${order.platform} order worth ${order.price} is urgent! Client: ${client.name}, rating: ${client.rating}.`
    console.log(`${message}`)
} else {
    message = `There is an order on ${order.platform} worth ${order.price} from client ${client.name}, rating ${client.rating}.`
    console.log(`${message}`)
};

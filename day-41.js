// Day 41
// Online Store: Order Processing

let orders = [
    { id: 101, item: "Keyboard", paid: true, stock: 5 },
    { id: 102, item: "Mouse", paid: false, stock: 8 },
    { id: 103, item: "Monitor", paid: true, stock: 0 },
    { id: 104, item: "Headset", paid: true, stock: 12 }
];

let shippedOrders = [];
let cancelledOrders = [];

function processOrders() {
    for (const order of orders) {
        if (order.paid === true && order.stock > 0) {
            shippedOrders.push(order.id);
            console.log(`Order ID: ${order.id} has been shipped.`);
        } else if (order.paid === false && order.stock > 0) {
            cancelledOrders.push(order.id);
            console.log(`Order ID: ${order.id} has not been paid.`);
        } else if (order.paid === true && order.stock <= 0) {
            cancelledOrders.push(order.id);
            console.log(`Order ID: ${order.id} has been cancelled. Item is out of stock. Your refund will be processed soon.`);
        } else {
            cancelledOrders.push(order.id);
            console.log(`Order ID: ${order.id} has been cancelled.`);
        }
    }
};

processOrders();

setTimeout(function() {
    console.log(`Shipped orders: ${shippedOrders}.`);
    console.log(`Cancelled orders: ${cancelledOrders}.`);
}, 3000);

setTimeout(function() {
    if (shippedOrders.length >= 4) {
        console.log(`Great job! All orders have been processed successfully.`);
    } else {
        console.log(`Some orders could not be completed.`);
    }
}, 5900);

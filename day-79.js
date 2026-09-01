// Day 79
// Order Manager in CRM with interactive sidebar

// Adding orders block
let orderAddingBlock = document.getElementById("order-adding");

let clinetNameInput = document.getElementById("client-input");
let amountInput = document.getElementById("amount-input");
let orderStatus = document.getElementById("status-select");
let addOrderButton = document.getElementById("add-order-btn");

// Filter block
let filterBlock = document.getElementById("filter-panel");

let filterStatus = document.getElementById("filter-select");

// Order list block
let orderListBlock = document.getElementById("order-list-block");

let orderList = document.getElementById("order-list");

// Total orders paragraph
let totalOrders = document.getElementById("total-orders");

let orders = [];

const renderOrders = (ordersToDisplay) => {
    orderList.innerHTML = "";

    for (let order of ordersToDisplay) {
        let li = document.createElement("li");

        li.innerText = `Client: ${order.client} | Orders total: $${order.sum} | Status: ${order.status}`;

        orderList.appendChild(li);
    }

    totalOrders.innerText = `Total orders: ${ordersToDisplay.length}`;
};

addOrderButton.addEventListener("click", () => {
    let newOrder = {
        client: clinetNameInput.value,
        sum: amountInput.value,
        status: orderStatus.value
    };

    orders.push(newOrder);

    renderOrders(orders);

    clinetNameInput.value = "";
    amountInput.value = "";
});

filterStatus.addEventListener("change", () => {
    if (filterStatus.value === "all") {
        renderOrders(orders);
    } else {
        let filtered = [];

        for (let order of orders) {
            if (order.status === filterStatus.value) {
                filtered.push(order);
            }
        }

        renderOrders(filtered);
    }
});

// Sidebar mechanic
let showAddingButton = document.getElementById("showAddingButton");
let showOrdersButton = document.getElementById("showOrdersButton");

let ordersSection = document.getElementById("orders-tab");
let statsSection = document.getElementById("stats-tab");

showAddingButton.addEventListener("click", () => {
    ordersSection.classList.remove("hidden");
    statsSection.classList.add("hidden");
});

showOrdersButton.addEventListener("click", () => {
    statsSection.classList.remove("hidden");
    ordersSection.classList.add("hidden");
});

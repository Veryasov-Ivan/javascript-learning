// Day 35
// Development of a suspicious transaction filtering module

let restrictedCurrencies = ["USD", "EUR", "GBP"];

let transactionQueue = [
    { id: "TX-101", amount: 500, currency: "RUB" },
    { id: "TX-102", amount: 12000, currency: "USD" },
    { id: "TX-103", amount: 8500, currency: "EUR" },
    { id: "TX-104", amount: 150, currency: "GBP" },
    { id: "TX-105", amount: 3000, currency: "CNY" }
];

let flaggedTransactions = [];

function auditTransactions() {
    for (const i of transactionQueue) {
        if (restrictedCurrencies.includes(i.currency) === true && i.amount >= 5000) {
            flaggedTransactions.push(i.id);
        }
    }
};

function processQueue() {
    auditTransactions();

    if (flaggedTransactions.length > 0) {
        console.log(`Security threat detected. Blocked transactions: ${flaggedTransactions}.`);
    } else {
        console.log(`Verification completed successfully. No suspicious transactions were found.`);
    }
};

setTimeout(function() {
    processQueue()
}, 3000);

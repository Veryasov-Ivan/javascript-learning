// Day 11

const transferAmount = 45000;
const isSuspiciousDevice = false;
const dailyLimitLeft = 100000;
const isVipClient = true;

if (
    isSuspiciousDevice === false &&
    transferAmount <= dailyLimitLeft &&
    (transferAmount < 50000 || isVipClient === true)
) {
    console.log("Transaction approved and sent for processing!");
} else if (
    isSuspiciousDevice === false &&
    (transferAmount > dailyLimitLeft || transferAmount >= 50000)
) {
    console.log("Transaction sent for manual operator review.");
} else {
    console.log("Transaction blocked! Potential fraud indicators detected.");
}

// Day 17

const nftPrice = 1000000;
const cryptoWallet = {
    owner: "Ivan",
    coins: ["USDT", "BTC", "SUI"],
    balances: {
        btcAmount: 1.5,
        suiAmount: 50000,
        usdtAmount: 100000,
    },
    marketPrices: {
        btcPrice: 60000,
        suiPrice: 5,
        usdtPrice: 1,
    },

    getTotalCryptoValue: function() {
        return (this.balances.btcAmount * this.marketPrices.btcPrice) + 
               (this.balances.suiAmount * this.marketPrices.suiPrice) + 
               (this.balances.usdtAmount * this.marketPrices.usdtPrice);
    },

    getInvoice: function(price) {
        if (cryptoWallet.getTotalCryptoValue() >= nftPrice) {
            return `Transaction approved for user ${this.owner}! You will have $${cryptoWallet.getTotalCryptoValue()} remaining after the purchase.`
        } else {
            return `Transaction declined! User ${this.owner} does not have enough funds. Current portfolio value: $${cryptoWallet.getTotalCryptoValue()}.`
        }
    }
};

let transactionStatus = "";

if (cryptoWallet.coins[0] === "BTC" && cryptoWallet.getTotalCryptoValue() >= 1000000) {
    transactionStatus = `${cryptoWallet.getInvoice(nftPrice)}`
} else {
    transactionStatus = `Your portfolio is too small or does not have BTC as the first asset. Total portfolio value: $${cryptoWallet.getTotalCryptoValue()}`
};

console.log(transactionStatus);

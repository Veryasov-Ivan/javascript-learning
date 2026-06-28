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
            return `Сделка одобрена для пользователя ${this.owner}! У вас останется $${cryptoWallet.getTotalCryptoValue()} после покупки.`
        } else {
            return `Отказ! Пользователю ${this.owner} не хватает $${cryptoWallet.getTotalCryptoValue()} для совершения сделки.`
        }
    }
};

let transactionStatus = "";

if (cryptoWallet.coins[0] === "BTC" && cryptoWallet.getTotalCryptoValue() >= 1000000) {
    transactionStatus = `${cryptoWallet.getInvoice(nftPrice)}`
} else {
    transactionStatus = `Ваш портфель слишком мал или не содержит BTC на первом месте. Общая стоимость активов: $${cryptoWallet.getTotalCryptoValue()}`
};

console.log(transactionStatus);

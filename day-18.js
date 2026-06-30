// Day 18

const streamer = {
    nickname: "Ninja",
    followers: 15000,
    isOnline: true,

    getStatusPhrase: function() {
        if (this.isOnline === true) {
        return `Streamer ${this.nickname} is currently live!`;
    } else {
        return `Streamer ${this.nickname} is offline. Follow to avoid missing the next stream!`
    }
},

    addNewFollowers: function(newSubscribers) {
        return this.followers + newSubscribers;
    }
};

let newSubs = 5000;

if (streamer.addNewFollowers(newSubs) >= 20000) {
    console.log(`Hooray, a milestone! ${streamer.getStatusPhrase()} Our new follower count is: ${streamer.addNewFollowers(newSubs)}.`)
} else {
    console.log(`The milestone is still far away. ${streamer.getStatusPhrase()}`)
};

// Day 16

const hero = {
    heroName: "SubZero",
    heroDamage: 15000,
    equipment: ["Ice Sword", "Ice Shield"],
    
    getHeroPhrase: function() {
        return `${this.heroName} is coming. My ${this.equipment[0]} will take your soul!`
    }
}

const buffs = {
    criticalHitChance: 65,
    isEnraged: true,

    getFinalAttack: function() {
        if (this.isEnraged === true) {
            return hero.heroDamage * 2;
        } else {
            return hero.heroDamage;
        }
    }
};

let battleStatus = "";

if (buffs.getFinalAttack() >= 10000 && buffs.criticalHitChance >= 50) {
    battleStatus = `This boss will fall! ${hero.getHeroPhrase()}`
    console.log(battleStatus);
} else if (hero.equipment[1] === "Ice Shield") {
    battleStatus = `${hero.heroName} switches to defense using the shield, and the current attack power of ${buffs.getFinalAttack()} is too low for an assault.`
    console.log(battleStatus);
} else {
    battleStatus = `It's time to retreat to the city. ${hero.heroName} needs to change tactics.`;
}

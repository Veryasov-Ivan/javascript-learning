// Day 21

const car1 = {
    model: "Solaris",
    hp: 100
};

const car2 = {
    model: "Mustang",
    hp: 300
};

const tuningGarage = {
    installTurbo: function(carInfo) {
        if (carInfo.hp <= 150) {
            carInfo.hp = carInfo.hp + 50
            return `The ${carInfo.model} has received a light upgrade. New power: ${carInfo.hp} HP.`
        } else if (carInfo.hp <= 350) {
            carInfo.hp = carInfo.hp + 150
            return `Warning! The ${carInfo.model} has turned into a rocket! New power: ${carInfo.hp} HP.`
        } else {
            return `The ${carInfo.model} is already too powerful. Further tuning would be dangerous!`
        }
    }
};

console.log(tuningGarage.installTurbo(car1));
console.log(tuningGarage.installTurbo(car2));

setTimeout(function() {
  console.log("The race will start soon... Warming up the engines! 🏎️");
}, 2000);

setTimeout(function() {
  if (car1.hp > car2.hp) {
    console.log(`The winner is ${car1.model}!`);
  } else if (car2.hp > car1.hp) {
    console.log(`The winner is ${car2.model}!`);
  } else {
    console.log("It's a draw! Both cars crossed the finish line side by side!");
  }
}, 5000);

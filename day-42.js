// Day 42
// Ship Docking Control System

let arrivingShips = [
    { name: "Orion", hasPermission: true, crew: 6 },
    { name: "Nova", hasPermission: false, crew: 4 },
    { name: "Galaxy", hasPermission: true, crew: 15 },
    { name: "Falcon", hasPermission: true, crew: 3 }
];

let approvedShips = [];
let rejectedShips = [];

function controlDocking() {
    for (const ship of arrivingShips) {
        if (ship.hasPermission === true && ship.crew <= 10) {
            approvedShips.push(ship.name);
            console.log(`Ship ${ship.name} is cleared for docking.`);
        } else if (ship.hasPermission === false && ship.crew <= 10) {
            rejectedShips.push(ship.name);
            console.log(`Ship ${ship.name} does not have docking permission.`);
        } else if (ship.hasPermission === true && ship.crew > 10) {
            rejectedShips.push(ship.name);
            console.log(`Ship ${ship.name} exceeds the crew limit.`);
        } else {
            rejectedShips.push(ship.name);
            console.log(`Ship ${ship.name} has been rejected.`);
        }
    }
}

controlDocking();

console.log(`Approved ships: ${approvedShips}.`);
console.log(`Rejected ships: ${rejectedShips}.`);

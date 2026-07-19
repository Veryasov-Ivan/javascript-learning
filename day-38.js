// Day 38
// Space Flight Seat Reservation System

let passengers = [
    { name: "Alex", hasTicket: true, baggageWeight: 12 },
    { name: "John", hasTicket: false, baggageWeight: 8 },
    { name: "Emma", hasTicket: true, baggageWeight: 25 },
    { name: "Sophia", hasTicket: true, baggageWeight: 18 }
];

let allowedWeight = 20;
let approvedPassengers = [];

function checkPassengers() {
    for (const passenger of passengers) {
        if (passenger.hasTicket === true && passenger.baggageWeight < allowedWeight) {
            approvedPassengers.push(passenger.name)
            console.log(`Passenger ${passenger.name} has been successfully verified!`)
        } else if (passenger.hasTicket === true && passenger.baggageWeight >= allowedWeight) {
            console.log(`Passenger ${passenger.name}, your baggage is too heavy. Weight limit exceeded: ${allowedWeight} kg.`)
        } else {
            console.log(`Passenger ${passenger.name}, you do not have a ticket.`)
        }
    }
};

setTimeout(function() {
    checkPassengers();

    if (approvedPassengers.length > 0) {
        console.log(`Verified passengers: ${approvedPassengers}. Please proceed to the waiting area.`)
    } else {
        console.log(`No verified passengers.`)
    }
}, 3000);

// Day 13

const brandName = "Hyrax";
const metricsOk = true;
const followers = 50000;

const greetings = ["Hello", "Greetings"];
const techNiches = ["devices", "PC hardware"];

if (metricsOk === true && followers >= 40000) {
  console.log(`${greetings[0]}, ${brandName} team! We have excellent performance metrics with ${followers} followers. Would you like to run an awesome promotion for your ${techNiches[1]}?`)
} else {
  console.log(`${greetings[1]}, ${brandName} team! We are interested in reviewing your ${techNiches[0]}, but we need to discuss the statistics first.`)
}

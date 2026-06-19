// Day 8

const creativeLength = 350;
const hasStopWords = false;
const campaignBudget = 1200;
const isTrustedClient = false;

if (
    hasStopWords === false &&
    creativeLength <= 500 &&
    (campaignBudget > 1000 || isTrustedClient === true)
) {
    console.log("Creative passed auto-moderation and has been launched!");
} else if (
    hasStopWords === false &&
    (campaignBudget <= 1000 || creativeLength > 500)
) {
    console.log("Creative has been sent for manual review.");
} else {
    console.log("Creative blocked! Stop words or critical violations detected.");
}

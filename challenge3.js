const prompt = require("prompt-sync")();


function ageInDays (ageInYears) {
    return ageInYears * 365;
};

let age = Number(prompt("Enter your age in years: "));

if(!isNaN(age)) {
    let ageDays = ageInDays(age);
    console.log("Your age in days is: " + ageDays);
} else {
    console.log("Invalid input. Please enter a valid number for age.");
}

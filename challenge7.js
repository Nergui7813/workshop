const prompt = require("prompt-sync")();

const input = Number(prompt(`Enter a number between 1 and 3999: `));

function main() {
  if (input <= 0 || input >=4000) {
    console.log("Your number is not within the allowed values")
  } else {
    
  }
}

main();

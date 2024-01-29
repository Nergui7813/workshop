// const prompt = require("prompt-sync")();

// const input = Number(prompt(`Enter a number between 1 and 3999: `));

// function main() {
//   if (input <= 0 || input >=4000) {
//     console.log("Your number is not within the allowed values")
//   } else {
    
//   }
// }

// main();

function divideWithRemainder(dividend, divisor) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  return { quotient, remainder };
}

// Example usage:
// const dividend = 17;
// const divisor = 5;

// const { quotient, remainder } = divideWithRemainder(dividend, divisor);
// const letter = 'b';
//     const repeatedLetters = letter.repeat(7);

function intToRoman(s) {
  const romanValues = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
  };

  let result = 0;
  let quotient = 0;
  let remainder = 0;
  let provisionary = 0;
  let divident = Number(s);
  // for (let i = 0; i < s.length; i++) {
    
  // }
while (divident > 0) {
  let power = String(divident).length - 1;
  let divisor = Math.pow(10, power);
  console.log(divident, divisor, power);

  ({quotient, remainder} = divideWithRemainder(divident, divisor));
  console.log('quotient and remainder are ', quotient, ' ', remainder);
  provisionary = quotient * divisor;
  console.log('provisionary is ', provisionary);
  if (Object.prototype.hasOwnProperty.call(romanValues, provisionary)) {
    result += romanValues[provisionary];
  } else {
    // need another condition here to help transform numbers like 900 in CM; or maybe not here exactly
    let letter = romanValues[divisor];
    console.log('the letter found is ', letter);
    result += letter.repeat(quotient);
  }
  divident = remainder;
   
}

  return result;
}

console.log(intToRoman(1990));
// function isValidRoman(s) {
//   const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
//   return romanPattern.test(s);
// }
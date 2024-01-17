
function romanToInt(s) {
  const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
      const currentChar = s[i];
      const currentValue = romanValues[currentChar];

      if (currentValue < prevValue) {
          result -= currentValue;
      } else {
          result += currentValue;
      }

      prevValue = currentValue;
  }

      return result;
 
}

function isValidRoman(s) {
  const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanPattern.test(s);
}

// Example usage:
// console.log(romanToInt("III"));       // Output: 3
// console.log(romanToInt("LVIII"));     // Output: 58
// console.log(romanToInt("MCMXCIV"));  // Output: 1994


const date = "MMCMXCIV"
const date1 = "MMDM" // -> output = 3500 and it's not a valid number; it should be 2500 at best
const date2 = "XXXX" // no bueno

const prompt = require("prompt-sync")();

const input = prompt(`Enter your roman numeral: `).toUpperCase();

function main() {
  if (isValidRoman(input)) {
    console.log(romanToInt(input))
  } else {
    console.log("Your number was not a correct roman numeral or your string was bigger than the max value 3999")
  }
}

main();


// turn roman numerals into arabic numbers
// ['I','V', 'X', 'L', 'C', 'D', 'M'] = [1, 5, 10, 50, 100, 500, 1000];
//['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'L', 'C', 'D', 'M'] = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10, 50, 100, 500, 1000];

//how do I count how many elemnts are grouped?
// ['II', 'III'] = [2, 3] - accepted
// 'IIII' - not ok pattern -> 'IV'
// ['XX', 'XXX'] = [20, 30] -> accepted
// 'XXXX' not ok pattern -> 'XL'

// I before V = 4, I after V = 6
// II before V != 3, but II after V = 7
// D cannot got before M
// AND WHAT IF THE LETTERS ARE LOWERCASE?
// 3999 = "MMMCMXCIX"
// 3888 = "MMMDCCCLXXXVIII" -> length 15
// MMMMDCCCLXXXVIII

// 122 % 10 = 12, r 2; 12%10 = 1, r 2 -> 1 x 10^2 + 2X10 + 2 CXXII

// https://www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php

const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  function isRepeatedConsecutively(str, char, times) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
        if (count >= times) {
          return true;
        }
      } else {
        count = 0; // Reset the count if the current character is different
      }
    }
  
    return false;
  }

  const individualRomanNumerals = Object.keys(romanHash);
  const romanNumeral1 =  "XXXXCVIIVMMMMDDDCCCCMMM";
  const romanNumeral2 =  "XXIX";

  function checkRepetition(str, characters, threshold) {
    characters.forEach(char => {
      const isRepeated = isRepeatedConsecutively(str, char, threshold);
      if (isRepeated) {
        console.error(`Error: insert a valid Roman numeral`);
      }
    });
  }// bugs: prints error for every numeral or undefined
  // solution: 1. check if elements from individualRomanNumerals are in the string
  // if none of them are should we treat this case somwhere else? ex input: "taps"
  // if any of them are, then check for repetition
  // when the first tru answer received print error message and break
  // if no repetition is found and all answers are false maybe return a message so that is does not console?

  console.log(checkRepetition(romanNumeral1, individualRomanNumerals, 3))
  console.log(checkRepetition(romanNumeral2, individualRomanNumerals, 3))
 
  // s = 1989
  function romanToInt(s) {
    let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "I" && s[i + 1] === "V") {
        accumulator += 4;
        i++;
      } else if (s[i] === "I" && s[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
        accumulator += romanHash[s[i]];
      }
    }
    return accumulator;
  }

  
const date = "MMCMXCIV"
const date1 = "MMDM" // -> output = 3500 and it's not a valid number; it should be 2500 at best
const date2 = "XXXX" // no bueno
  console.log(romanToInt(date2))
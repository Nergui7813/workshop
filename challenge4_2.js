const prompt = require("prompt-sync")();

function validateNumber(input, usedNumbers) {
  const number = Number(input);
  
  if (isNaN(number) || number < -10 || number > 10) {
    console.log('Invalid input. Please enter a number between -10 and 10.');
    return false;
  }

  if (usedNumbers.includes(number)) {
    console.log('Number must be unique. Please enter a number that has not been used.');
    return false;
  }

  return true;
}

function promptUser() {
  const numbersArray = [];

  console.log('Enter up to 6 unique numbers between -10 and 10 (press Enter to finish):');

  for (let i = 0; i < 6; i++) {
    const input = prompt(`Enter number ${i + 1}: `);

    if (input.trim() === '') {
      // If the user presses Enter without entering a number, exit the loop
      break;
    }

    const isValid = validateNumber(input, numbersArray);

    if (isValid) {
      numbersArray.push(Number(input));
    } else {
      // Decrement i to re-prompt for the same position
      i--;
    }
  }

  return numbersArray;
}

function getAllPermutations(array) {
  if (array.length === 0) return [[]];

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
    const permutations = getAllPermutations(remaining);

    for (const perm of permutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

function main() {
  try {
    const numbers = promptUser();

    console.log('\nEntered numbers:', numbers);

    const permutations = getAllPermutations(numbers);
    
    console.log('\nAll possible permutations:');
    permutations.forEach((perm, index) => {
      console.log(`${index + 1}: [${perm.join(', ')}]`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

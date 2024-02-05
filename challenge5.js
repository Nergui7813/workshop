const prompt = require("prompt-sync")();

function validateNumber(input) {
  const number = Number(input);
  
  if (isNaN(number) || number < -10 || number > 10) {
    console.log('Invalid input. Please enter a number between -10 and 10.');
    return false;
  }

  return true;
}

function promptUser() {
  const numbersArray = [];

  console.log('Enter up to 6 numbers between -10 and 10 (press Enter to finish):');

  for (let i = 0; i < 6; i++) {
    const input = prompt(`Enter number ${i + 1}: `);

    if (input.trim() === '') {
      // If the user presses Enter without entering a number, exit the loop
      break;
    }

    const isValid = validateNumber(input);

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
  const result = [];

  function generatePermutations(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i] === remaining[i - 1]) {
        continue; // Skip duplicates
      }

      const updatedCurrent = [...current, remaining[i]];
      const updatedRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      generatePermutations(updatedCurrent, updatedRemaining);
    }
  }

  array.sort((a, b) => a - b); // Sort the input array to handle duplicates
  generatePermutations([], array);

  return result;
}

function main() {
  try {
    const numbers = promptUser();

    console.log('\nEntered numbers:', numbers);

    const permutations = getAllPermutations(numbers);
    
    console.log('\nAll unique permutations:');
    permutations.forEach((perm, index) => {
      console.log(`${index + 1}: [${perm.join(', ')}]`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();


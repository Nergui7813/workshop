// function calculatePermutations(arr) {
//     const result = [];
  
//     function generatePermutations(current, remaining) {
//       if (remaining.length === 0) {
//         result.push(current.slice());  // Clone the current permutation and add it to the result
//         console.log("Intermediate result: ", result);
//         return;
//       }
  
//       for (let i = 0; i < remaining.length; i++) {
//         const nextElement = remaining[i];
//         console.log("next element ", nextElement);
  
//         // Choose
//         current.push(nextElement);
//         remaining.splice(i, 1);
//         console.log("current and remaining are: ", current, " , ", remaining)
  
//         // Explore
//         generatePermutations(current, remaining);
        
  
//         // Un-choose (backtrack)
//         current.pop();
//         remaining.splice(i, 0, nextElement);
//         console.log("now current and remaining are: ", current, " , ", remaining)
//       }
//     }
  
//     generatePermutations([], arr);
//     return result;
//   }
  
//   // Example usage:
//   const inputArray = [1, 2, 3, 4];
//   const permutations = calculatePermutations(inputArray);
//   console.log(permutations);
  

function generatePermutations(inputArray) {
    const result = [];

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function permute(arr, start) {
        if (start === arr.length - 1) {
            result.push(arr.slice());  // Clone the array and add it to the result
            return;
        }

        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            permute(arr, start + 1);
            swap(arr, start, i);  // Backtrack to the original order
        }
    }

    permute(inputArray, 1);  // Start from the second position

    return result;
}

function rotateElementsInArray (arr) {
    const result = [];

    // Helper function to rotate elements in an array
    function rotateArray(arr) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    for (let i = 0; i < arr.length; i++) {
        const currentPermutation = arr.slice();  // Copy the original array

        // Rotate the array i times
        for (let j = 0; j < i; j++) {
            rotateArray(currentPermutation);
        }

        result.push(currentPermutation);
    }

    return result;
}


function main (array) {
    let finalArrays = [];
  
    const rotatedArray = rotateElementsInArray(array);
    rotatedArray.forEach((arr) => {
        finalArrays.push(generatePermutations(arr))
    });
    
    return finalArrays;
}


console.log(main([1,2,3,4]))
// Example usage:
// const inputArray = [1, 2, 3, 4];
// const permutations = generatePermutations(inputArray);
// console.log(permutations);


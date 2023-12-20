/*
function permute(nums) {
  function backtrack(first = 0) {
    if (first === nums.length) {
      // Append a copy of the current permutation to the result
      result.push(nums.slice());
    }
    for (let i = first; i < nums.length; i++) {
      // Swap the elements at positions first and i
      [nums[first], nums[i]] = [nums[i], nums[first]];
      // Recursively generate permutations for the rest of the array
      backtrack(first + 1);
      // Backtrack by restoring the original order
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }

  const result = [];
  backtrack();
  //console.log("Permutations: ", result);
  return result;
}

*/

const nums1 = [1, 2, 3];
console.log(permute(nums1));
// const nums2 = [1, 2, 3, 4];
// console.log(permute(nums2));
// const nums3 = [1];
// console.log(permute(nums3));

function permute(nums) {
  let result = [];  // Initialize an empty array to store permutations

  function backtrack(first) {
      console.log("Entering backtrack with first =", first);

      if (first === nums.length) {
          console.log("Found a permutation:", nums);
          // If we've processed all elements, add the current permutation to the result
          result.push(nums.slice());
      }

      for (let i = first; i < nums.length; i++) {
          console.log("Considering element at index", i, "with value", nums[i]);

          // Swap the elements at positions first and i
          [nums[first], nums[i]] = [nums[i], nums[first]];
          console.log(`"After swap:", i= ${i}, first = ${first}, ${nums}`);

          // Recursively generate permutations for the rest of the array
          backtrack(first + 1);

          // Backtrack by restoring the original order
          [nums[first], nums[i]] = [nums[i], nums[first]];
          console.log("After backtrack:", nums);
      }

      console.log("Leaving backtrack with first =", first);
  }

  // Start the backtracking process with the first element (index 0)
  backtrack(0);

  return result;
}

// Output:
// Entering backtrack with first = 0 / i = 0 / nums[0], nums[0] = nums[0], nums[0] => [1, 2, 3]
// Considering element at index 0 with value 1
// After swap: [1, 2, 3]
// Entering backtrack with first = 1 / i = 1 / nums[1], nums[1] = nums[1], nums[1] => [1, 2, 3]
// Considering element at index 1 with value 2
// After swap: [2, 1, 3]
// Entering backtrack with first = 2
// Considering element at index 2 with value 3
// After swap: [3, 1, 2]
// Found a permutation: [3, 1, 2]
// After backtrack: [1, 3, 2]
// Considering element at index 1 with value 3
// After swap: [1, 3, 2]
// Found a permutation: [1, 3, 2]
// After backtrack: [1, 2, 3]
// Leaving backtrack with first = 1
// After backtrack: [1, 2, 3]
// Considering element at index 2 with value 2
// After swap: [2, 1, 3]
// Entering backtrack with first = 2
// Considering element at index 2 with value 3
// After swap: [3, 1, 2]
// Found a permutation: [3, 2, 1]
// After backtrack: [2, 3, 1]
// Considering element at index 1 with value 3
// After swap: [2, 3, 1]
// Found a permutation: [2, 3, 1]
// After backtrack: [2, 1, 3]
// Leaving backtrack with first = 0
// Leaving backtrack with first = 0
// Leaving backtrack with first = 0
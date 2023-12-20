const nums = [1,2,3, 4]

const shuffledArray = function (array) {
    const suffled_array = array.slice(); // Make a copy of the input array
    console.log(suffled_array)
for (let i = suffled_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [suffled_array[i], suffled_array[j]] = [suffled_array[j], suffled_array[i]];
}
return suffled_array;
}

// console.log(shuffledArray(nums));

function getPermutations(array) {
    const result = [];
  
    function permute(arr, current = []) {
      if (arr.length === 0) {
        result.push([...current]);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        current.push(arr[i]);
        permute(remaining, current);
        current.pop();
      }
    }
  
    permute(array);
    return result;
  }
  
 
  const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
        console.log("result is: ", result, " and m is: ", m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }

  // const permutations = getPermutations(nums);
  const permutations = permutator(nums)
  
  console.log(permutations);
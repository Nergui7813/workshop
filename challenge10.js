const populateArray = function (x, y) {
    const resultArray = [];
  
    for (let i = 0; i < x; i++) {
      resultArray.push(1);
    }
  
    for (let i = 0; i < y; i++) {
      resultArray.push(2);
    }
  
    return resultArray;
  }

  function createArrays(no_stairs) {
    const arrays = [];
  
    for (let i = 0; i <= no_stairs / 2; i++) {
      const x = no_stairs - 2 * i;
      const y = i;
      
      const newArray = populateArray(x, y);
      arrays.push(newArray);
    }
  
    return arrays;
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


const main = function (no_stairs) {
    let initialArrays = createArrays(no_stairs);
    let result = 0;
    initialArrays.forEach((array) => {
    result = result + getAllPermutations(array).length; 
    });

    console.log(result);
}

main(4);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by a comma (max 6 numbers, between -10 and 10): ', (input) => {
    const numberArray = input.split(',').map(num => parseInt(num.trim(), 10));

    if (numberArray.length > 6 || !numberArray.every(num => num >= -10 && num <= 10) || new Set(numberArray).size !== numberArray.length) {
        console.log("Invalid input. Please enter up to 6 unique numbers between -10 and 10.");
        rl.close();
        return;
    }

    const permutations = getPermutations(numberArray);
    console.log("All possible permutations:");
    console.log(permutations);
    rl.close();
});

function getPermutations(array) {
    if (array.length === 0) return [[]];
    const firstElement = array[0];
    // console.log("first element is: ", firstElement)
    const rest = array.slice(1);
    // console.log("rest is: ", rest)
    const permsWithoutFirst = getPermutations(rest);
    // console.log("permutations without first: ", permsWithoutFirst)
    const allPermutations = [];
    // console.log("all permutations : ", allPermutations)

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstElement, ...perm.slice(i)];
            // console.log("..with first: ", permWithFirst)
            allPermutations.push(permWithFirst);
            // console.log("....  ", allPermutations)
        }
    });

    return allPermutations;
}
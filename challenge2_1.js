const prompt = require("prompt-sync")();

let number = Number(prompt("Enter your number: "));

const isPalindrome_string = function (value) {
    //const numberValue = Number(value)
    if ( (value < -231 || value > 230) || isNaN(value)) {
        console.log("Please choose a number between -231 and 230")
    } else {
        const valueString = value.toString();
        let reversed = valueString.split("").reverse().join("");
        reversed = Number(reversed);

        if(reversed === value) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};


const isPalindrome_number = function (value) {

}

const check = isPalindrome_string(number);
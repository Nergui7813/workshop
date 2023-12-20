const prompt = require("prompt-sync")();

let value = prompt("Enter your number: ");

const isPalindrome_string = function (value) {
        const reversedNumber = value.split("").reverse().join("");
        if (value === reversedNumber) {
            console.log(true) 
        } else {
            console.log(false)
        }
};


const isPalindrome_number = function (value) {
    let numberValue = Number(value);
    let reversedNumber = 0;

    if (numberValue < 0) {
        console.log(false)
    } else {
    while (numberValue > 0) {
        const digits = numberValue % 10;
        numberValue = Math.floor(numberValue / 10);
        reversedNumber =  reversedNumber * 10 + digits;
    }
    
    if (Number(value) === reversedNumber) {
        console.log(true);
    }else {
        console.log(false);
    }
}
};

const finalFunction = function (value, type) {
    const numberValue = Number(value);
    if ( (numberValue < -231 || numberValue > 230) || isNaN(numberValue)) {
        console.log("Please choose a number between -231 and 230")
    } else {
    if (type === "string") {
        isPalindrome_string(value);
    } else {
        isPalindrome_number(value);
    }
}
}

finalFunction(value, "number")
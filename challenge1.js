/* eslint-disable no-case-declarations */
/* eslint-disable complexity */
/* eslint-disable id-length */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




rl.question("Enter type: ", (type) => {
    rl.question("Enter value: ", (value) => {
        checkValueType(type, value); 
            rl.close();
        });
    });




const checkValueType = function (type, value) {
    switch (type) {
        case "int":
        case "integer":
            const intValue = parseInt(value);
            if (!isNaN(intValue)) {
                console.log(intValue);
            } else {
                console.log("Invalid integer value.");
            }
            break;

        case "no":
        case "number":
            const numberValue = Number(value);
            if (!isNaN(numberValue)) {
                console.log(numberValue);
            } else {
                console.log("Invalid number value.");
            }
            break;

        case "str":
        case "string":
            console.log(value);
            break;

        case "arr":
        case "array":
            try {
                const arrayValue = JSON.parse(value);
                if (Array.isArray(arrayValue)) {
                    console.log(arrayValue);
                } else {
                    console.log("Invalid array value.");
                }
            } catch (err) {
                console.log("Invalid data type");
            }
            break;

        case "obj":
        case "object":
            try {
                const objectValue = JSON.parse(value);
                if (typeof objectValue === "object" && !Array.isArray(objectValue)) {
                    console.log(objectValue);
                } else {
                    console.log("Invalid object value.");
                }
            } catch (err) {
                console.log("Invalid data type");
            }
            break;

        case "file":
        case "fs":
            fs.readFile(value, "utf8", (err, data) => {
                if (err) {
                    console.error("Error reading the file:", err);
                } else {
                    const lines = data.split("\n").length;
                    console.log(`Number of lines in the file: ${lines}`);
                }
                rl.close();
            });
            return;

        default:
            console.log("Invalid type value!");
    }
};
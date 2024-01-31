function areParenthesesValid(input) {
    const regex = /\(|\)|\[|\]|\{|\}/g;
    const stack = [];

    const matchingPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };


    const isOpeningSymbol = (symbol) => '({['.includes(symbol);
    console.log(input.match(regex))
    for (const symbol of input.match(regex) || []) { 
        if (isOpeningSymbol(symbol)) {
            stack.push(symbol);
            // console.log("stack ", stack);
        } else {
            const lastOpeningSymbol = stack.pop();
            // console.log("lastOpeningSymbol ", lastOpeningSymbol);
            if (matchingPairs[symbol] !== lastOpeningSymbol) {
                return false;
            }
        }
    }

    return stack.length === 0;
}



// console.log(areParenthesesValid("{(})"))
// console.log(areParenthesesValid("()[]{}"))
// console.log(areParenthesesValid("{[()]}"))

function isValid(s) {
    // Using a stack to keep track of opening brackets
    const stack = [];
    // Mapping of closing to opening brackets
    const bracketMap = { ')': '(', '}': '{', ']': '[' };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack if it's not empty, otherwise assign a dummy value
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // If the mapping for the closing bracket doesn't match the top element, return false
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were properly closed
    return stack.length === 0;
}

console.log(isValid("{()}[{}][[[[[[{{{{{{(((((())))))}}}}}}]]]]]](){}[][][][][][]()()()()()()()()()()()(){}{[[[[[[(())]]]]]]}"))
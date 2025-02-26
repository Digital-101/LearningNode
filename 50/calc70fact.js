const bigInt = require("big-integer");

function factorial(n) {
    let result = bigInt(1); // Start with 1 as the initial value
    for (let i = bigInt(1); i.lesserOrEquals(n); i = i.plus(1)) {
        result = result.times(i); // Multiply result by the current number
    }
    return result;
}

const result = factorial(bigInt(70));
console.log(result.toString());
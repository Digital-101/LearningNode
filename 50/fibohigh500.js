const bigInt = require("big-integer");

function fibonacci(n) {
    let a = bigInt(0), b = bigInt(1), temp;

    for (let i = 1; i < n; i++) {
        temp = a.add(b);
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibonacci(500).toString());
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(10);
console.log(result); // Output: 3628800
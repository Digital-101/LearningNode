function getPositiveNumbers(...args) {
    return args.filter(num => num > 0);
}

// Example usage:
const result = getPositiveNumbers(-1, 2, -3, 4, 5);
console.log(result); // Output: [2, 4, 5]
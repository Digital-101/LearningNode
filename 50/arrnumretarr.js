function getDistinctNumbers(arr) {
    return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const distinctNumbers = getDistinctNumbers(numbers);
console.log(distinctNumbers); // Output: [1, 2, 3, 4, 5]
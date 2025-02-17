function sumOfNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = sumOfNumbers(numbers);
console.log(sum); // Output: 15
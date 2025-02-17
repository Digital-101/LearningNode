function averageArray(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(averageArray(numbers)); // Output: 3
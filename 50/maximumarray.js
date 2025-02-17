function findMaximum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
console.log(findMaximum(numbers)); // Output: 12
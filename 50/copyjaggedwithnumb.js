function deepCopyJaggedArray(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.map(item => deepCopyJaggedArray(item));
}

// Example usage:
const originalArray = [1, [2, 3], [4, [5, 6]], 7];
const copiedArray = deepCopyJaggedArray(originalArray);

console.log(copiedArray); // Output: [1, [2, 3], [4, [5, 6]], 7]
console.log(copiedArray === originalArray); // Output: false
console.log(copiedArray[1] === originalArray[1]); // Output: false
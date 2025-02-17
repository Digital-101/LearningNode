function mergeAndFilter(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = mergeAndFilter(array1, array2);
console.log(result); // Output: [1, 2, 3]
function mergeAndFilterArrays(array1, array2) {
    const mergedArray = [...array1, ...array2];
    const result = mergedArray.filter(item => 
        (array1.includes(item) && !array2.includes(item)) || 
        (!array1.includes(item) && array2.includes(item))
    );
    return result;
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(mergeAndFilterArrays(array1, array2)); // Output: [1, 2, 5, 6]
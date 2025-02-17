function rotateArrayRight(arr) {
    if (arr.length === 0) return arr;
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateArrayRight(array);
console.log(rotatedArray); // Output: [5, 1, 2, 3, 4]
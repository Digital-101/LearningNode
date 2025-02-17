function rotateArrayLeft(arr) {
    if (arr.length === 0) return arr;
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(rotateArrayLeft(array)); // Output: [2, 3, 4, 5, 1]
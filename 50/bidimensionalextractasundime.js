function extractColumn(matrix, columnIndex) {
    return matrix.map(row => row[columnIndex]);
}

// Example usage:
const biDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const column = extractColumn(biDimensionalArray, 1);
console.log(column); // Output: [2, 5, 8]
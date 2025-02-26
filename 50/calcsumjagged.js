function sumJaggedArray(arr) {
    let sum = 0;

    function helper(subArray) {
        for (let element of subArray) {
            if (Array.isArray(element)) {
                helper(element);
            } else if (typeof element === 'number') {
                sum += element;
            }
        }
    }

    helper(arr);
    return sum;
}

// Example usage:
const jaggedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(sumJaggedArray(jaggedArray)); // Output: 28
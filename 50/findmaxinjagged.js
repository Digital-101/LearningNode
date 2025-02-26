function findMaxInJaggedArray(arr) {
    let max = -Infinity;

    function findMax(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                findMax(arr[i]);
            } else if (typeof arr[i] === 'number') {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
        }
    }

    findMax(arr);
    return max;
}

// Example usage:
const jaggedArray = [1, [2, 3, [4, 5]], [6, 7], 8, [9, [10]]];
console.log(findMaxInJaggedArray(jaggedArray)); // Output: 10
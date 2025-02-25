function calculateSum(commaDelimitedString) {
    // Split the string by commas to get an array of numbers in string format
    const numberStrings = commaDelimitedString.split(',');

    // Convert the array of number strings to an array of numbers
    const numbers = numberStrings.map(Number);

    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum;
}

// Example usage:
const inputString = "1,2,3,4,5";
const result = calculateSum(inputString);
console.log(`The sum is: ${result}`); // Output: The sum is: 15
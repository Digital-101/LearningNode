function asciiArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}

// Example usage:
const asciiArray = [72, 101, 108, 108, 111];
const result = asciiArrayToString(asciiArray);
console.log(result); // Output: "Hello"
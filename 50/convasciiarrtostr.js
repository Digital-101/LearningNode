function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}

// Example usage:
const asciiArray = stringToAsciiArray("Hello");
console.log(asciiArray); // Output: [72, 101, 108, 108, 111]
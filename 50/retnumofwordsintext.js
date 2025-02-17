function countWords(text) {
    if (typeof text !== 'string') {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
}

// Example usage:
const text = "Hello, how many words are in this sentence?";
console.log(countWords(text)); // Output: 8
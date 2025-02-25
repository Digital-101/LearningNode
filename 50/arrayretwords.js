function getWords(text) {
    return text.match(/\b\w+\b/g) || [];
}

// Example usage:
const text = "This is a sample text with several words.";
const wordsArray = getWords(text);
console.log(wordsArray); // Output: ["This", "is", "a", "sample", "text", "with", "several", "words"]
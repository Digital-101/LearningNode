function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
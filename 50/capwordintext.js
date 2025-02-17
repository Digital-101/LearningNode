function capitalizeWords(text) {
    return text.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage:
const text = "hello world! this is a test.";
const capitalizedText = capitalizeWords(text);
console.log(capitalizedText); // Output: "Hello World! This Is A Test."
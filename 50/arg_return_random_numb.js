function getRandomNumbers(n) {
    const numbers = [];
    while (numbers.length < n) {
        const randomNumber = Math.floor(Math.random() * n) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

console.log(getRandomNumbers(7)); // Example usage
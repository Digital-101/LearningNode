function sumOfDigits(num) {
    if (num < 0) {
        throw new Error("Input must be a positive number");
    }
    
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage:
const number = 12345;
console.log(`The sum of digits of ${number} is ${sumOfDigits(number)}`);
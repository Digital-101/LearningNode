function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = [];
    let len1 = num1.length;
    let len2 = num2.length;
    let maxLen = Math.max(len1, len2);

    for (let i = 0; i < maxLen; i++) {
        let digit1 = i < len1 ? parseInt(num1[len1 - 1 - i]) : 0;
        let digit2 = i < len2 ? parseInt(num2[len2 - 1 - i]) : 0;
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
    }

    if (carry > 0) {
        result.unshift(carry);
    }

    return result.join('');
}

// Example usage:
console.log(addLargeNumbers("12345678901234567890", "98765432109876543210")); // Output: "111111111011111111100"
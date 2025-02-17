function findNthFibo(n) {
    if (n <= 1) {
        return n;
    }
    return findNthFibo(n - 1) + findNthFibo(n - 2);
}

// Example usage:
console.log(findNthFibo(10)); // Output: 55
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function firstPrimesGreaterThanN(p, N) {
    const primes = [];
    let num = N + 1;

    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

// Example usage:
console.log(firstPrimesGreaterThanN(5, 10)); // Output: [11, 13, 17, 19, 23]
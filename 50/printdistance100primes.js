function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

function printPrimeDistances(primes) {
    for (let i = 1; i < primes.length; i++) {
        console.log(`Distance between ${primes[i - 1]} and ${primes[i]}: ${primes[i] - primes[i - 1]}`);
    }
}

const first100Primes = getFirstNPrimes(100);
printPrimeDistances(first100Primes);
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function sumFirst100Primes() {
    let primes = [];
    let num = 2;

    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumFirst100Primes());
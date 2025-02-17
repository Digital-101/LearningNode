function generateFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

const first10Fibo = generateFibonacci(10);
console.log(first10Fibo);
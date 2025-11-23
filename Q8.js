let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(n => n * n);
console.log("Squares:", squares);
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let primes = nums.filter(isPrime);
console.log("Prime Numbers:", primes);
let sum = nums.reduce((total, value) => total + value, 0);
console.log("Sum:", sum);
let descending = nums.sort((a, b) => b - a);
console.log("Descending Order:", descending);


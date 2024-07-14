function countPrimeNumbers() {
    function isPrime(number) {
        for (let i = 2; i < number; ++i) {
            if (number % i === 0) {
                return false;
            }
        }

        return number > 1;
    }

    let count = 0;

    for (let i = 2; i <= 100; ++i) {
        if (isPrime(i)) {
            ++count;
        }
    }

    return count;
}

const startTime = performance.now();

countPrimeNumbers();

const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);

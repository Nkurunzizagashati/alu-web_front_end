function countPrimeNumbers() {
  let limit = 100;
  const arr = [];

  for (let i = 2; i <= limit; i++) {
    let j = 2;
    for (j; j < i; j++) {
      if (i % j === 0) {
        break;
      }
    }

    if (i === j) {
      arr.push(i);
    }
  }

  return arr.length;
}
const startTime = performance.now();
const primeNumbersArr = countPrimeNumbers();
const endTime = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    endTime - startTime
  } milliseconds.`
);

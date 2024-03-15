function countPrimeNumbers() {
  let limit = 100;
  const arr = [];

  for (let i = 2; i <= limit; i++) {
    let j = 2;
    for (j; j < i; j++) {
      if (i % j === 0) {
        j = 2;
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
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    countPrimeNumbers();
  }, 0);
}
const endTime = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    endTime - startTime
  } milliseconds.`
);

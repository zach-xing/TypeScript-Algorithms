/**
 * 素数筛
 */
export default function sieveOfEratosthenes(maxNumber: number) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number);

      // 当输入的数太大的话，这种写法会造成溢出
      // 可以改成 let nextNumber = 2 * number;
      let nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
}

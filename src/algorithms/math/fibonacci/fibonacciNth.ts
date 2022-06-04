export default function fibonacciNth(n: number) {
  let curValue = 1;
  let prevValue = 0;

  if (n === 1) {
    return 1;
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    curValue += prevValue;
    prevValue = curValue - prevValue;

    iterationsCounter--;
  }

  return curValue;
}

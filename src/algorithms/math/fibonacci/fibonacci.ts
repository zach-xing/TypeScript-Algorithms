export default function fibonacci(n: number) {
  const fibSequence = [1];

  let curValue = 1;
  let prevValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  let iterationsCounter = n - 1;
  while (iterationsCounter) {
    curValue += prevValue;
    prevValue = curValue - prevValue;

    fibSequence.push(curValue);

    iterationsCounter--;
  }

  return fibSequence;
}

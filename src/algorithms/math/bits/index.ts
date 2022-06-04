export function getBit(number: number, bitPosition: number) {
  return (number >> bitPosition) & 1;
}

export function setBit(number: number, bitPosition: number) {
  return number | (1 << bitPosition);
}

export function clearBit(number: number, bitPosition: number) {
  const mask = ~(1 << bitPosition);
  return number & mask;
}

export function updateBit(
  number: number,
  bitPosition: number,
  bitValue: 0 | 1
) {
  // Init clear mask.
  const clearMask = ~(1 << bitPosition);

  return (number & clearMask) | (bitValue << bitPosition);
}

export function isEven(number: number) {
  return (number & 1) === 0;
}

/**
 * 判断是否是正数
 */
export function isPositive(number: number) {
  if (number === 0) {
    return false;
  }
  // 最显着的第32位可以用于确定数字是否为正。
  return ((number >> 31) & 1) === 0;
}

export function multiplyByTwo(number: number) {
  return number << 1;
}

export function divideByTwo(number: number) {
  return number >> 1;
}

/**
 * 将正数变成负数，反之亦然
 */
export function switchSign(number: number) {
  return ~number + 1;
}

export function multiply(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }
  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

export function multiplyUnsigned(number1: number, number2: number) {
  let result = 0;
  let bitIndex = 0;
  let multiplier = number2;
  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += number1 << bitIndex;
    }
    bitIndex += 1;
    multiplier >>= 1;
  }
  return result;
}

export function countSetBits(originalNumber: number) {
  let setBitsCount = 0;
  let number = originalNumber;
  while (number) {
    setBitsCount += number & 1;
    number >>>= 1;
  }
  return setBitsCount;
}

export function bitsDiff(numberA: number, numberB: number) {
  return countSetBits(numberA ^ numberB);
}

export function bitLength(number: number) {
  let bitsCounter = 0;
  while (1 << bitsCounter <= number) {
    bitsCounter += 1;
  }
  return bitsCounter;
}

export function isPowerOfTwo(number: number) {
  return (number & (number - 1)) === 0;
}

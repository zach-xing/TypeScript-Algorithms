/**
 * 检查数字是否为 2 的幂 (原生算法)
 */
export default function isPowerOfTwo(number: number) {
  if (number < 1) {
    return false;
  }
  let divideNumber = number;
  while (divideNumber !== 1) {
    if (divideNumber % 2 !== 0) {
      return false;
    }
    divideNumber /= 2;
  }
  return true;
}

/**
 * 检查数字是否为 2 的幂 (按位算法)
 * 1: 0001
 * 2: 0010
 * 4: 0100
 * 8: 1000
 */
export default function isPowerOfTwoBitwise(number: number) {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
}

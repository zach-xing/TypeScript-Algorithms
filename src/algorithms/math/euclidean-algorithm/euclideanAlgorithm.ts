/**
 * 欧几里得算法，计算最大公约数
 */
export default function euclideanAlgorithm(
  originalA: number,
  originalB: number
): number {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}

import euclideanAlgorithm from "../euclidean-algorithm/euclideanAlgorithm";

/**
 * 最小公倍数
 * lcm(a, b) = |a * b| / gcd(a, b)
 * gcd - 最大公约数
 */
export default function leastCommonMultiple(a: number, b: number): number {
  return a === 0 || b === 0
    ? 0
    : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

/**
 * 阶乘
 */
export function factorial(number: number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

/**
 * 使用递归的方法阶乘
 */
export function factorialRecursive(number: number): number {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

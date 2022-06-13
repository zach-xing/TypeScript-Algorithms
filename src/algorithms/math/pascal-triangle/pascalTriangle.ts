/**
 * Pascal-triangle 也就是 杨辉三角
 * 获取指定行的数据
 */
export default function pascalTriangle(lineNumber: number) {
  const currentLint = [1];
  const currentLineSize = lineNumber + 1;

  for (let i = 1; i < currentLineSize; i++) {
    currentLint[i] = (currentLint[i - 1] * (lineNumber - i + 1)) / i;
  }

  return currentLint;
}

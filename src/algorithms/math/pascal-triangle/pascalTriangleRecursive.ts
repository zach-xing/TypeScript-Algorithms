/**
 * 使用递归的方法
 */
export default function pascalTriangleRecursive(lineNumber: number): number[] {
  if (lineNumber === 0) {
    return [1];
  }
  const currentLineSize = lineNumber + 1;
  const previousLineSize = currentLineSize - 1;

  const currentLine = [];

  const preveiousLine = pascalTriangleRecursive(lineNumber - 1);

  for (let i = 0; i < currentLineSize; i++) {
    const left = i - 1 >= 0 ? preveiousLine[i - 1] : 0;
    const right = i < previousLineSize ? preveiousLine[i] : 0;

    currentLine[i] = left + right;
  }
  return currentLine;
}

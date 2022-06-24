/**
 * 最长公共子序列
 * @param set1 string[]
 * @param set2 string[]
 * @returns
 */
export default function longestCommonSubsequence(
  set1: string[],
  set2: string[]
) {
  const arr: Array<Array<number>> = Array(set2.length + 1)
    .fill(0)
    .map(() => Array(set1.length + 1).fill(0));

  for (let row = 1; row <= set2.length; row++) {
    for (let col = 1; col <= set1.length; col++) {
      if (set1[col - 1] === set2[row - 1]) {
        arr[row][col] = arr[row - 1][col - 1] + 1;
      } else {
        arr[row][col] = Math.max(arr[row - 1][col], arr[row][col - 1]);
      }
    }
  }

  if (arr[set2.length][set1.length] === 0) {
    // 若最后一个为 0，则没有遇到相同的
    return [""];
  }

  const resArr = [];
  let rowIndex = set2.length,
    colIndex = set1.length;
  while (rowIndex > 0 || colIndex > 0) {
    if (set1[colIndex - 1] === set2[rowIndex - 1]) {
      resArr.unshift(set1[colIndex - 1]);
      colIndex--;
      rowIndex--;
    } else if (arr[rowIndex][colIndex] === arr[rowIndex][colIndex - 1]) {
      // 向左
      colIndex--;
    } else {
      // 向上
      rowIndex--;
    }
  }

  return resArr;
}

/**
 * 最长递增子序列
 */
export default function dpLongestIncreasingSubsequence(sequence: number[]) {
  const arr = new Array(sequence.length).fill(1);

  let prevIndex = 0,
    curIndex = 1;
  while (curIndex < sequence.length) {
    if (sequence[prevIndex] < sequence[curIndex]) {
      const tmp = arr[prevIndex] + 1;
      if (arr[curIndex] < tmp) {
        arr[curIndex] = tmp;
      }
    }
    prevIndex += 1;
    if (prevIndex === curIndex) {
      prevIndex = 0;
      curIndex += 1;
    }
  }

  const res = Math.max(...arr);
  return res;
}

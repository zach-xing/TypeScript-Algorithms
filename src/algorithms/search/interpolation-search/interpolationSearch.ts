export default function interpolationSearch(
  sortedArray: number[],
  seekElement: number
) {
  let left = 0,
    right = sortedArray.length - 1;

  while (left <= right) {
    // 别忘记 sortedArray 是有序的
    const rangeDelta = sortedArray[right] - sortedArray[left];
    const indexDelta = right - left;
    const valueDelta = seekElement - sortedArray[left];

    if (valueDelta < 0) {
      // 表示没有找到
      return -1;
    }

    if (!rangeDelta) {
      // 若 rangeDelta 为 0，则表示 这段范围的数字都是相同的
      return seekElement === sortedArray[left] ? left : -1;
    }

    const mid = left + Math.floor((valueDelta * indexDelta) / rangeDelta);
    if (sortedArray[mid] === seekElement) {
      return mid;
    }
    if (sortedArray[mid] < seekElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

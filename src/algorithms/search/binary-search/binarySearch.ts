import Comparator from "../../../utils/Comparator";

/**
 * 二分法
 * @param sortedArray any[]
 * @param seekElement any
 * @param comparatorCallback Function
 * @returns 若找到，返回下标，否则返回 -1
 */
export default function binarySearch(
  sortedArray: any[],
  seekElement: any,
  comparatorCallback?: Function
) {
  const comparator = new Comparator(comparatorCallback);

  let start = 0,
    end = sortedArray.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (comparator.equals(sortedArray[mid], seekElement)) {
      return mid;
    }

    if (comparator.lessThan(sortedArray[mid], seekElement)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

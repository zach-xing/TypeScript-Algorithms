import Comparator from "../../../utils/Comparator";

/**
 * 跳转搜索（块搜索）
 * @param sortedArray *[]
 * @param seekElement *
 * @param comparatorCallback Function
 * @returns
 */
export default function jumpSearch(
  sortedArray: any[],
  seekElement: any,
  comparatorCallback?: Function
) {
  const comparator = new Comparator(comparatorCallback);
  const len = sortedArray.length;

  if (len === 0) {
    return -1;
  }

  const jumpSize = Math.floor(Math.sqrt(len));
  let start = 0,
    end = jumpSize;
  while (
    comparator.greaterThan(seekElement, sortedArray[Math.min(end, len) - 1])
  ) {
    start = end;
    end += jumpSize;
    if (start >= len) {
      return -1;
    }
  }

  let curIdx = start;
  while (curIdx < Math.min(end, len)) {
    if (comparator.equals(sortedArray[curIdx], seekElement)) {
      return curIdx;
    }
    curIdx++;
  }
  return -1;
}

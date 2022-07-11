import Sort from "../Sort";

export default class MergeSort extends Sort {
  sort(originalArray: any[]): any[] {
    this.callbacks.visitingCallback(null);

    if (originalArray.length <= 1) {
      return originalArray;
    }

    const len = originalArray.length;
    const mid = Math.floor(len / 2);

    const leftArr = originalArray.slice(0, mid);
    const rightArr = originalArray.slice(mid, len);

    const leftArrSorted = this.sort(leftArr);
    const rightArrSorted = this.sort(rightArr);

    return this.mergeSortedArrays(leftArrSorted, rightArrSorted);
  }

  mergeSortedArrays(leftArray: any[], rightArray: any[]): any[] {
    const sortedArr = [];
    let leftIdx = 0,
      rightIdx = 0;

    while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
      let tmp = null;
      if (
        this.comparator.lessThanOrEqual(
          leftArray[leftIdx],
          rightArray[rightIdx]
        )
      ) {
        tmp = leftArray[leftIdx];
        leftIdx++;
      } else {
        tmp = rightArray[rightIdx];
        rightIdx++;
      }
      sortedArr.push(tmp);

      this.callbacks.visitingCallback(tmp);
    }

    return sortedArr
      .concat(leftArray.slice(leftIdx))
      .concat(rightArray.slice(rightIdx));
  }
}

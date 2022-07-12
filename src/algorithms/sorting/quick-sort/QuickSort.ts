import Sort from "../Sort";

/**
 * 快排
 */
export default class QuickSort extends Sort {
  sort(originalArray: any[]): any[] {
    if (originalArray.length <= 1) return originalArray;
    const array = [...originalArray];

    let prevEl = array.shift();
    const conterArr = [prevEl];

    let leftArr = [];
    let rightArr = [];

    while (array.length) {
      let curEl = array.shift();

      this.callbacks.visitingCallback(curEl);

      if (this.comparator.equals(prevEl, curEl)) {
        conterArr.push(curEl);
      } else if (this.comparator.lessThan(prevEl, curEl)) {
        rightArr.push(curEl);
      } else {
        leftArr.push(curEl);
      }
    }

    let leftSortedArr = this.sort(leftArr);
    let rightSortedArr = this.sort(rightArr);

    return leftSortedArr.concat(conterArr, rightSortedArr);
  }
}

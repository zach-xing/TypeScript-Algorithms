import Sort from "../Sort";

export default class SelectionSort extends Sort {
  sort(originalArray: any[]) {
    const array = [...originalArray];
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
      let tmpIdx = i;
      this.callbacks.visitingCallback(array[i]);
      for (let j = i + 1; j < len; j++) {
        this.callbacks.visitingCallback(array[i]);
        if (this.comparator.lessThan(array[j], array[tmpIdx])) {
          tmpIdx = j;
        }
      }
      if (tmpIdx !== i) {
        [array[tmpIdx], array[i]] = [array[i], array[tmpIdx]];
      }
    }

    return array;
  }
}

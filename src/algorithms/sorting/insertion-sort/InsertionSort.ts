import Sort from "../Sort";

export default class InsertionSort extends Sort {
  sort(originalArray: any[]) {
    const array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      let curIdx = i;

      this.callbacks.visitingCallback(array[i]);

      while (
        array[curIdx - 1] !== undefined &&
        this.comparator.lessThan(array[curIdx], array[curIdx - 1])
      ) {
        this.callbacks.visitingCallback(array[curIdx - 1]);

        [array[curIdx], array[curIdx - 1]] = [array[curIdx - 1], array[curIdx]];
        curIdx -= 1;
      }
    }

    return array;
  }
}

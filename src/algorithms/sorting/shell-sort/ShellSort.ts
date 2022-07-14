import Sort from "../Sort";

export default class ShellSort extends Sort {
  sort(originalArray: any[]) {
    const array = [...originalArray];

    const len = array.length;
    let gap = Math.floor(originalArray.length / 2);

    while (gap > 0) {
      for (let i = 0; i < len - gap; i++) {
        let curIdx = i;
        let tmpIdx = i + gap;

        while (curIdx >= 0) {
          this.callbacks.visitingCallback(array[curIdx]);

          if (this.comparator.lessThan(array[tmpIdx], array[curIdx])) {
            [array[curIdx], array[tmpIdx]] = [array[tmpIdx], array[curIdx]];
          }
          tmpIdx = curIdx;
          curIdx -= gap;
        }
      }
      gap = Math.floor(gap / 2);
    }

    return array;
  }
}

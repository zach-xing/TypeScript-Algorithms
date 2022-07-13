import Sort from "../Sort";

export default class QuickSortInPlace extends Sort {
  sort(
    originalArray: any[],
    inputLowIndex = 0,
    inputHighIndex = originalArray.length - 1,
    recursiveCall = false
  ) {
    const array = recursiveCall ? originalArray : [...originalArray];
    const partitionArray = (lowIndex: number, highIndex: number) => {
      const tmp = array[highIndex];
      this.callbacks.visitingCallback(tmp);
      let flagIdx = lowIndex;
      for (let i = lowIndex; i < highIndex; i++) {
        if (this.comparator.lessThan(array[i], tmp)) {
          [array[i], array[flagIdx]] = [array[flagIdx], array[i]];
          flagIdx++;
        }
      }
      [array[highIndex], array[flagIdx]] = [array[flagIdx], array[highIndex]];

      return flagIdx;
    };

    if (inputLowIndex < inputHighIndex) {
      const mid = partitionArray(inputLowIndex, inputHighIndex);
      this.sort(array, inputLowIndex, mid - 1, true);
      this.sort(array, mid + 1, inputHighIndex, true);
    }

    return array;
  }
}

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
      
    };
  }
}

/**
 * 组合求和
 */
export default function combinationSum(candidates: number[], target: number) {
  const bar = (
    candidates: number[],
    remainingSum: number,
    finalCombinations: Array<Array<number>> = [],
    currentCombination: number[] = [],
    startFrom: number = 0
  ) => {
    if (remainingSum < 0) {
      return finalCombinations;
    }

    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
    }

    for (let i = startFrom; i < candidates.length; i++) {
      const tmp = candidates[i];

      currentCombination.push(tmp);

      bar(
        candidates,
        remainingSum - tmp,
        finalCombinations,
        currentCombination,
        i
      );

      currentCombination.pop();
    }

    return finalCombinations;
  };

  return bar(candidates, target);
}

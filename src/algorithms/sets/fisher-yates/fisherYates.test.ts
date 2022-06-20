import fisherYates from "./fisherYates";

describe("fisherYates", () => {
  it("should shuffle small arrays", () => {
    expect(fisherYates([])).toEqual([]);
    expect(fisherYates([1])).toEqual([1]);
  });

  it("should shuffle array randomly", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArray = fisherYates(arr);

    const sortedArr = arr.sort();
    expect(shuffledArray.length).toBe(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(shuffledArray.sort()).toEqual(sortedArr);
  });
});

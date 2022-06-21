/**
 * 使用迭代的方法来求幂集
 */
export default function btPowerSet(originSets: Array<number>) {
  const backtrackFunc = (
    originArr: Array<number>,
    resultArr: Array<Array<number | null>>,
    curArr: Array<number>,
    curIndex: number
  ) => {
    const len = originArr.length;
    for (let i = curIndex; i < len; i++) {
      curArr.push(originArr[i]);
      resultArr.push([...curArr]);

      backtrackFunc(originArr, resultArr, curArr, i + 1);

      curArr.pop();
    }

    return resultArr;
  };

  return backtrackFunc(originSets, [[]], [], 0);
}

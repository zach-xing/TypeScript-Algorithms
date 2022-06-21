/**
 * 使用 按位 的方式解决
 */
export default function bwPowerSet(originSets: number[]) {
  const resultArr = [];

  const num = 2 ** originSets.length;

  for (let i = 0; i < num; i++) {
    const sub = [];

    for (let j = 0; j < originSets.length; j++) {
      if (i & (1 << j)) {
        sub.push(originSets[j]);
      }
    }

    resultArr.push(sub);
  }
  return resultArr;
}

/**
 * 笛卡尔集
 * @param setA number[]
 * @param setB number[]
 */
export default function cartesianProduct(setA: number[], setB: number[]) {
  if (!setA || !setB || !setA.length || !setB.length) {
    return null;
  }

  const res = [];

  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      res.push([setA[i], setB[j]]);
    }
  }

  return res;
}

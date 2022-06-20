/**
 * 洗牌算法
 * @param originalArray any[]
 */
export default function fisherYates(originalArray: any[]) {
  const arr = [...originalArray];

  const len = arr.length;
  let index: number = 0;
  for (let i = len - 1; i > 0; i--) {
    index = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

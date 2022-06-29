/**
 * 汉明距离
 * @param a string
 * @param b string
 * @returns 同位置不同字符的个数
 */
export default function hammingDistance(a: string, b: string): number {
  if (a.length !== b.length) {
    throw new Error("长度不等");
  }

  let res = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      res++;
    }
  }

  return res;
}

/**
 * 莱温斯坦距离 - 两个序列之间的最小编辑距离
 * @param a string
 * @param b string
 */
export default function levenshteinDistance(a: string, b: string) {
  const dp = new Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= b.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= a.length; i++) {
    dp[0][i] = i;
  }

  let tmp: number = 0;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      tmp = a[j - 1] === b[i - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + tmp
      );
    }
  }

  return dp[b.length][a.length];
}

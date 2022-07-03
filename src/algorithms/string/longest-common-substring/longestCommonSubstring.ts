export default function longestCommonSubstring(
  string1: string,
  string2: string
) {
  const s1 = [...string1],
    s2 = [...string2];
  const dp = new Array(s2.length + 1)
    .fill(0)
    .map(() => Array(s1.length + 1).fill(0));

  let longestSubLength = 0,
    longestSubColumn = 0,
    longestSubRow = 0;

  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s1[j - 1] === s2[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] > longestSubLength) {
        // 保持最长公共子串长度
        longestSubLength = dp[i][j];
        longestSubRow = i;
        longestSubColumn = j;
      }
    }
  }

  if (longestSubLength === 0) {
    return "";
  }

  let res = "";

  while (dp[longestSubRow][longestSubColumn] > 0) {
    res = s1[longestSubColumn - 1] + res;
    longestSubRow--;
    longestSubColumn--;
  }

  return res;
}

//最长回文子串
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 处理奇数回文串
    const s1 = palindrome(s, i, i);
    // 处理偶数回文串
    const s2 = palindrome(s, i, i + 1);
    res = res.length <= s1.length ? s1 : res;
    res = res.length <= s2.length ? s2 : res;
  }
  return res;
};

// 返回以l,r为中心点扩散的最长回文串
function palindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

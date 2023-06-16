/**
 * @param {string} s
 * @return {number}
 */

// variant 1
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let l = 0;
  let r = 1;

  let max = 1;

  while (r < s.length) {
    const substring = s.slice(l, r + 1);
    const set = new Set(substring);

    if (substring.length === set.size) {
      max = Math.max(max, set.size);
    } else {
      l++;
    }

    r++;
  }

  return max;
};

// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const dict = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (charS in dict) {
      if (dict[charS] !== charT) return false;
    } else {
      if (set.has(charT)) return false;

      dict[charS] = charT;
      set.add(charT);
    }
  }

  return true;
};

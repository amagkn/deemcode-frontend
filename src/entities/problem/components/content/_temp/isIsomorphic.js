// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapa = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const tChar = t[i];
    const sChar = s[i];

    if (sChar in mapa) {
      const needChar = mapa[sChar];

      if (needChar !== tChar) return false;
    } else {
      if (set.has(tChar)) return false;

      mapa[sChar] = tChar;
      set.add(tChar);
    }
  }

  return true;
};

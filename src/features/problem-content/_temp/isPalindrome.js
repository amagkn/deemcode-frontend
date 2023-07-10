// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var _isPalindrome = function (s) {
  let cleanedStr = "";

  for (let char of s) {
    const lowerChar = char.toLowerCase();

    const isNumber = lowerChar >= "0" && lowerChar <= "9";
    const isLetter = lowerChar >= "a" && lowerChar <= "z";

    if (isNumber || isLetter) cleanedStr += lowerChar;
  }

  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    const fromStart = cleanedStr[i];
    const fromEnd = cleanedStr[cleanedStr.length - 1 - i];

    if (fromStart !== fromEnd) return false;
  }

  return true;
};

// Без цикла с очисткой строки
const isAlphabetic = (char) => {
  return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const charFromStart = s[l].toLowerCase();
    const charFromEnd = s[r].toLowerCase();

    if (!isAlphabetic(charFromStart)) {
      l++;
      continue;
    }

    if (!isAlphabetic(charFromEnd)) {
      r--;
      continue;
    }

    if (charFromStart !== charFromEnd) return false;
    l++;
    r--;
  }

  return true;
};

// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
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

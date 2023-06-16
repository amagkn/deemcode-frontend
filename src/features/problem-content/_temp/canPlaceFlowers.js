// https://leetcode.com/problems/can-place-flowers/submissions/970908972/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (!n) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] ?? 0;
    const next = flowerbed[i + 1] ?? 0;
    const current = flowerbed[i];

    if (prev === 0 && next === 0 && current === 0) {
      flowerbed[i] = 1;
      n--;

      if (n === 0) return true;
    }
  }

  return false;
};

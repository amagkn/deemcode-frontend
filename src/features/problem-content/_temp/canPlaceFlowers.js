// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] ?? 0;
    const next = flowerbed[i + 1] ?? 0;
    const curr = flowerbed[i];

    if (prev === 0 && next === 0 && curr === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};

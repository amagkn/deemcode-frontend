// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Задачу можно решить как и способом беребора всех элементов как в задаче twoSum, так и взять во внимание то, что массив отсортирован
// и улучшить производительность алголитма

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const result = numbers[r] + numbers[l];

    if (result === target) return [l + 1, r + 1];
    if (result > target) r--;
    if (result < target) l++;
  }
};

// nums = [2,7,11,15], target = 9 ; result = [1,2]

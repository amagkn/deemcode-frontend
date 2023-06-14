// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  let prevIndex = -1;
  let prevMaxValue = null;

  while (l <= r) {
    const middle = Math.floor((l + r) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] > target) r = middle - 1;
    if (nums[middle] < target) {
      if (prevMaxValue === null || nums[middle] > prevMaxValue) {
        prevIndex = middle;
        prevMaxValue = nums[middle];
      }

      l = middle + 1;
    }
  }

  return prevIndex + 1;
};

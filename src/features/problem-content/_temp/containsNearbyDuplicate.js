// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let values = {};

  for (let i = nums.length - 1; i >= 0; i--) {
    const curr = nums[i];

    if (curr in values) {
      if (values[curr] - i <= k) {
        return true;
      } else {
        values[curr] = i;
      }
    } else {
      values[curr] = i;
    }
  }

  return false;
};

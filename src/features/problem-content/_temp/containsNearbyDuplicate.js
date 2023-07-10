// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (curr in dict) {
      if (i - dict[curr] <= k) {
        return true;
      }
    }

    dict[curr] = i;
  }

  return false;
};

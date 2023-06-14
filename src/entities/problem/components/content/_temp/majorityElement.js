// https://leetcode.com/problems/majority-element/submissions/970912844/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorityValue = Math.ceil(nums.length / 2);
  const mapa = {};

  for (let i = 0; i < nums.length; i++) {
    mapa[nums[i]] = mapa[nums[i]] !== undefined ? mapa[nums[i]] + 1 : 1;

    if (mapa[nums[i]] === majorityValue) return nums[i];
  }

  return false;
};

// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const values = {};

  for (const [i, n] of Object.entries(nums)) {
    const diff = target - n;

    if (diff in values) {
      return [values[diff], i];
    }

    values[n] = i;
  }
};

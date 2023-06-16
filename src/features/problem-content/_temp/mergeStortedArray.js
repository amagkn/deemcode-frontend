//https://leetcode.com/problems/merge-sorted-array/
//https://www.youtube.com/watch?v=P1Ic85RarKY

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// лучше другое решение посмотри
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    const n = nums2[i];

    nums1[nums1.length - nums2.length + i] = n;
  }

  nums1.sort((a, b) => a - b);
};

var mergeMyVersion = function (nums1, nums2) {
  const result = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }

  if (nums1.length) {
    result.push(...nums1);
  }

  if (nums2.length) {
    result.push(...nums2);
  }

  return result;
};

console.log(mergeMyVersion([1, 2], [3, 4])); // [1,2,3,4]

console.log(mergeMyVersion([2, 4, 5], [1, 3, 6])); // [1,2,3,4,5,6]

console.log(mergeMyVersion([4, 7], [1, 3])); // [1,3,4,7]

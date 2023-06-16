/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2];

  merged.sort((a, b) => a - b);

  const middle = Math.floor(merged.length / 2);

  if (merged.length % 2 !== 0) {
    return merged[middle];
  } else {
    return (merged[middle - 1] + merged[middle]) / 2;
  }
};

var _findMedianSortedArrays = function (nums1, nums2) {};

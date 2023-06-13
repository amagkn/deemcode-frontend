// leetcode: https://leetcode.com/problems/merge-intervals/submissions/969170547/
// neetcode: https://www.youtube.com/watch?v=44H3cEC2fFM

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    const prevEnd = result[result.length - 1][1];

    if (start <= prevEnd) {
      result[result.length - 1][1] = Math.max(prevEnd, end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
); // [[0,4]]

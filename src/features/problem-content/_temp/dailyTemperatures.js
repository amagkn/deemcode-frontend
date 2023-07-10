// https://leetcode.com/problems/daily-temperatures/
// https://www.youtube.com/watch?v=-59FbGWsCgI&t=90s&ab_channel=СашаЛукин

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    const currTemp = temperatures[i];

    while (stack.length) {
      const prevTemp = stack[stack.length - 1];

      if (prevTemp.value - currTemp > 0) {
        result.unshift(prevTemp.index - i);
        break;
      } else {
        stack.pop();
      }
    }

    if (!stack.length) {
      result.unshift(0);
    }

    stack.push({ value: currTemp, index: i });
  }

  return result;
};

// https://leetcode.com/problems/daily-temperatures/
// https://www.youtube.com/watch?v=-59FbGWsCgI&t=90s&ab_channel=СашаЛукин

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [
    {
      index: temperatures.length - 1,
      value: temperatures[temperatures.length - 1],
    },
  ];
  const result = [0];

  for (let i = temperatures.length - 2; i >= 0; i--) {
    const currentTemp = temperatures[i];

    while (stack.length) {
      const lastTemp = stack[stack.length - 1];

      if (lastTemp.value > currentTemp) {
        result.unshift(lastTemp.index - i);
        break;
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      result.unshift(0);
    }

    stack.push({ index: i, value: currentTemp });
  }

  return result;
};

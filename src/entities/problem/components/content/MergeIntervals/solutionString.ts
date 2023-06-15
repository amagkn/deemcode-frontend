export const solutionString = `const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  const result = [intervals[0]];

  for(let i = 1; i < intervals.length; i++) {
    const prevEnd = result[result.length - 1][1];
    const [start, end] = intervals[i];

    if(start <= prevEnd) {
      if(end > prevEnd) result[result.length - 1][1] = end 
    } else {
      result.push(intervals[i])
    }
  }

  return result;
};`;

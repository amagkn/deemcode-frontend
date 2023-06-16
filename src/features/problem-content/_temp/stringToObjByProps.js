// const stringToObjByProps = (str) => {
//   const queue = str.split(".");
//   const result = {};
//
//   let current = result;
//
//   while (queue.length) {
//     const prop = queue.shift();
//
//     current[prop] = {};
//
//     current = current[prop];
//   }
//
//   return result;
// };

const stringToObjByProps = (str) => {
  const result = {};

  str.split(".").reduce((acc, el) => {
    acc[el] = {};

    return acc[el];
  }, result);

  return result;
};

const str = "one.two.three.four.five";

console.log(JSON.stringify(stringToObjByProps(str))); //'{"one":{"two":{"three":{"four":{"five":{}}}}}}'

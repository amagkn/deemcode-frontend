// ts-node -O '{"module": "commonjs"}' debounce.ts

const sum = (a: number, b: number) => {
  const result = a + b;
  console.log(result);
  return result;
};

export const debounce = <T extends Function>(cb: T) => {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, 1000);
  };
};

const debouncedSum = debounce(sum);

debouncedSum(1, 2);
debouncedSum(4, 2);
debouncedSum(5, 2);
debouncedSum(1, 21);
debouncedSum(1, 80);

export const argsDecorator = <T extends Function>(cb: T) => {
  const callable = (...args: any) => {
    console.log("Args:", args);

    return cb(...args);
  };

  return callable as any as T;
};

const withArgsLoggerSum = argsDecorator(sum);

const result = withArgsLoggerSum(5, 5);

console.log(result);

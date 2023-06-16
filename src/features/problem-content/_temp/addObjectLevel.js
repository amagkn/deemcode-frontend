const addLevels = (obj) => {
  obj.level = 0;

  const queue = [obj];

  while (queue.length) {
    const currentObj = queue.shift();

    for (let nextObj of Object.values(currentObj)) {
      if (Object.isExtensible(nextObj)) {
        nextObj.level = currentObj.level + 1;

        queue.push(nextObj);
      }
    }
  }

  return obj;
};

// Объект на вход
const obj = {
  a: {
    d: {
      h: 4,
      z: { y: 1 },
    },
    e: 2,
  },
  b: 1,
  c: {
    f: {
      g: 3,
      k: {},
    },
  },
};

addLevels(obj);

console.dir(JSON.stringify(obj));

// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

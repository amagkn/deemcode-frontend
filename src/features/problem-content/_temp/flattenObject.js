/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

function toFlattenObj(obj) {
  const result = {};
  const queue = [obj];

  while (queue.length) {
    const curr = queue.shift();

    for (const [key, value] of Object.entries(curr)) {
      if (key === "path") continue;

      const newPath = curr.path ? `${curr.path}.${key}` : key;

      if (typeof value === "object") {
        value.path = newPath;
        queue.push(value);
      } else {
        result[newPath] = value;
      }
    }
  }

  return result;
}

const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
};

const flattenedObj = toFlattenObj(obj);

console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

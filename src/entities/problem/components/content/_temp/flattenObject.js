/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const flattenObject = (obj) => {
  const queue = [obj];
  const result = {};

  while (queue.length) {
    const current = queue.shift();

    for (let [key, value] of Object.entries(current)) {
      if (key === "prefix") continue;

      let newProp = current.prefix ? `${current.prefix}.${key}` : key;

      if (Object.isExtensible(value)) {
        value.prefix = newProp;

        queue.push(value);
      } else {
        result[newProp] = value;
      }
    }
  }

  return result;
};

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

const flattenedObj = flattenObject(obj);

console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

const deepCopy = (obj) => {
  let result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      result = { ...result, [key]: { ...deepCopy(value) } };
    } else {
      result[key] = value;
    }
  }

  return result;
};

const a = {
  b: 12,
  c: "z",
  d: {
    e: { f: 10 },
    j: 0,
  },
};

const b = deepCopy(a);

a.d.e.f = "changed";

console.log("original -", a.d.e.f); // changed
console.log("from deepCopy -", b.d.e.f); // 10

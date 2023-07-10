// Дана купюра, стоимость товара. Дайте самый удобный размен, используя номиналы 25, 10, 5, 1

function _getChange(cash, price) {
  let change = cash - price;
  const nominals = [25, 10, 5, 1];
  const result = [];

  while (change > 0) {
    const biggestNominal = nominals[0];

    while (biggestNominal <= change) {
      result.push(biggestNominal);
      change = change - biggestNominal;
    }

    nominals.shift();
  }

  return result;
}

const getChange = (money, price) => {
  const nominals = [25, 10, 5, 1];
  let change = money - price;
  const result = [];

  nominals.forEach((n) => {
    while (change >= n) {
      change -= n;
      result.push(n);
    }
  });

  return result;
};

console.log(getChange(100, 50)); // [25, 25]
console.log(getChange(115, 50)); // [25, 25, 10, 5]

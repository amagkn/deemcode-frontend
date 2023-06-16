// найди индекс, после которого можно вставить целевой элемент в отсортированном массиве

// Плохой вариант без бинарного поиска
const _findIndexToPlaceAfter = (arr, n) => {
  // Нужный элемент вставим в начало списка, т.к. он меньше всех, значит найти предыдущий индекс элемента после которого мы вставим наш мы не смогли
  if (n < arr[0]) return -1;

  for (let i = 0; i < arr.length; i++) {
    // нашли элемент в массиве который больше вставляемого, значит индекс, после которого мы вставим этот элемент = предыдущий
    if (arr[i] > n) {
      return i - 1;
    }
  }

  // Нужно элемент нужно вставить в конец списка, поэтому последний индекс, после которого мы вставим будет последний элемент
  return arr.length - 1;
};

const findIndexToPlaceAfter = (arr, n) => {
  let l = 0;
  let r = arr.length - 1;

  let prevValue = -Infinity;
  let prevIndex = null;

  while (l <= r) {
    const middle = Math.floor((l + r) / 2);

    if (arr[middle] > n) r = middle - 1;
    if (arr[middle] < n) {
      if (prevValue < arr[middle]) {
        prevValue = arr[middle];
        prevIndex = middle;
      }

      l = middle + 1;
    }
  }

  return prevIndex ?? -1;
};

console.log(findIndexToPlaceAfter([1, 3], 2)); // Вставим элемент 2 после элемента 1, который находится на 0 индексе, ответ - 0
console.log(findIndexToPlaceAfter([1, 2], 3)); // Вставим элемент 3 после элемента 2, который находится на 1 индексе, ответ - 1
console.log(findIndexToPlaceAfter([4, 5], 2)); // Ответ -1, т.к. мы не смогли найти предыдущий индекс элемента после которого вставим наш элемент

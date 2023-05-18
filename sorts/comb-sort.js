function swap(arr, i, j) {
  const copiedArr = [...arr];
  const tmp = arr[i];
  copiedArr[i] = copiedArr[j];
  copiedArr[j] = tmp;

  return copiedArr;
}

// Расчёска
function combSort(arr = []) {
  const FACTOR = 1.247;
  const length = arr.length;
  let copiedArr = [...arr];
  let step = length - 1;

  while (step >= 1) {
    for (let i = 0; i + step < length; i++) {
      const currentEl = copiedArr[i];
      const nextStepEl = copiedArr[i + step];

      if (currentEl > nextStepEl) {
        copiedArr = swap(copiedArr, i, i + step);
      }
    }

    step /= FACTOR;
  }

  // Доработка пузырьком
  for (let i = 0; i + 1 < length; i++) {
    for (let j = 0; j + 1 < length - i; j++) {
      const currentEl = copiedArr[j];
      const nextEl = copiedArr[j + 1];

      if (currentEl > nextEl) {
        copiedArr = swap(copiedArr, j, j + 1);
      }
    }
  }

  return copiedArr;
}

console.log(combSort([33, 1, -5, 10, 60, 5, 0, 31, 8]));

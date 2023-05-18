function bubbleSorting(arr = []) {
  const length = arr.length;
  const copiedArr = [...arr];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - (i + 1); j++) {
      const currentEl = copiedArr[j];
      const nextEl = copiedArr[j + 1];

      if (currentEl > nextEl) {
        copiedArr[j] = nextEl;
        copiedArr[j + 1] = currentEl;
      }
    }
  }

  return copiedArr;
}

console.log(bubbleSorting([88, 2, 5, 1, 0, 10, 4, 22, -5]));

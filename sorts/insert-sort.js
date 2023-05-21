function insertSort(arr = []) {
  const copiedArr = [...arr];
  const length = copiedArr.length;

  for (let i = 1; i < length; i++) {
    const currentValue = copiedArr[i];

    let j = i;

    while (j > 0 && copiedArr[j - 1] > currentValue) {
      copiedArr[j] = copiedArr[j - 1];

      j--;
    }

    copiedArr[j] = currentValue;
  }

  return copiedArr;
}

console.log(insertSort([33, 1, -5, 10, 60, 5, 0, 31, 8]));

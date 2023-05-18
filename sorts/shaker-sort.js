function swap(arr, i, j) {
  const copiedArr = [...arr];
  const tmp = arr[i];
  copiedArr[i] = copiedArr[j];
  copiedArr[j] = tmp;

  return copiedArr;
}

function shakerSort(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  let copiedArr = [...arr];

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (copiedArr[i] > copiedArr[i + 1]) {
        copiedArr = swap(copiedArr, i, i + 1);
      }
    }
    right--;

    for (let i = right; i > left; i--) {
      if (copiedArr[i] < copiedArr[i - 1]) {
        copiedArr = swap(copiedArr, i, i - 1);
      }
    }
    left++;
  }

  return copiedArr;
}

console.log(shakerSort([33, 1, -5, 10, 60, 5, 0, 31, 8]));

function fastSort(arr = []) {
  if (arr.length < 2) {
    return arr;
  }

  const reference = arr[0];
  const copiedArr = [...arr];

  copiedArr.shift();

  const less = copiedArr.filter((el) => reference >= el);
  const greater = copiedArr.filter((el) => el > reference);

  return [...fastSort(less), reference, ...fastSort(greater)];
}

console.log(fastSort([2, 10, 10, 1, -1, 40, 32, 11, 0]));

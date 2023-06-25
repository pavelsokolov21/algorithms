function sum(arr = []) {
  if (arr.length === 0) {
    return 0;
  }

  const copiedArr = [...arr];
  const lastEl = copiedArr.pop();

  return sum(copiedArr) + lastEl;
}

function countOfElements(arr = []) {
  if (arr.length === 0) {
    return 0;
  }

  const copiedArr = [...arr];
  copiedArr.pop();

  return countOfElements(copiedArr) + 1;
}

function max(arr = []) {
  if (arr.length === 0) {
    return 0;
  }

  const copiedArr = [...arr];
  copiedArr.pop();

  return max(copiedArr) + 1;
}

console.log(countOfElements([5, 5, 1, 5]));

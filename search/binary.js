const items = new Array(128).fill(0).map((_, idx) => idx);

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length;

  while (high >= low) {
    const mid = Math.floor((high + low) / 2);
    const el = arr[mid];

    if (el === item) {
      return el;
    }

    if (el < item) {
      low = mid + 1;

      continue;
    }

    if (el > item) {
      high = mid - 1;

      continue;
    }
  }

  return null;
}

console.log(binarySearch(items, 10));

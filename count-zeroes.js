function countZeroes(arr) {
  let firstZeroIdx = findFirstZero(arr);
  if (firstZeroIdx === -1) return 0;
  return arr.length - firstZeroIdx;
}

function findFirstZero(arr, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = left + Math.floor((left + right - 1) / 2);
    if ((arr[mid] === 0 && arr[mid - 1] === 1) || mid === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirstZero(arr, mid + 1, right);
    }
    return findFirstZero(arr, left, mid - 1);
  }
  return -1;
}

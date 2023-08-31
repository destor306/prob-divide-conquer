function sortedFrequency(arr, num) {
  let first_idx = findFirst(arr, num);
  if (first_idx === -1) return -1;
  let last_idx = findLast(arr, num);
  return last_idx - first_idx + 1;
}

function findFirst(arr, num, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if ((arr[mid] === num && arr[mid - 1] < num) || mid === 0) {
      return mid;
    } else if (arr[mid] < num) {
      return findFirst(arr, num, mid + 1, right);
    }
    return findFirst(arr, num, left, mid - 1);
  }
  return -1;
}

function findLast(arr, num, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num && (arr[mid + 1] > num || mid === arr.length - 1)) {
      return mid;
    } else if (arr[mid] > num) {
      return findLast(arr, num, left, mid - 1);
    }
    return findLast(arr, num, mid + 1, right);
  }
  return -1;
}

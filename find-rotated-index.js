function findRotatedIndex(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // if the middle element is the target value, return its index
    if (arr[mid] === val) return mid;

    // if the left half is sorted
    if (arr[left] <= arr[mid]) {
      // if the target value is within the sorted left half
      if (arr[left] <= val && val < arr[mid]) {
        right = mid - 1;
      } else {
        // if the target is not within the sorted left half, search in right half
        left = mid + 1;
      }
    } else {
      // if the right half is sorted
      // if target value is within sorted right half
      if (arr[mid] < val && val <= arr[right]) {
        left = mid + 1;
      } else {
        // if target value is not within right half, search on left half
        right = mid - 1;
      }
    }
  }
  return -1;
}

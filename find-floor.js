function findFloor(arr, num, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  if (arr[right] <= num) return arr[right];

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] == num) return arr[mid];
  if (mid > 0 && num < arr[mid] && num >= arr[mid - 1]) return arr[mid - 1];
  else if (arr[mid] < num) return findFloor(arr, num, mid + 1, right);
  else return findFloor(arr, num, left, mid - 1);
}
